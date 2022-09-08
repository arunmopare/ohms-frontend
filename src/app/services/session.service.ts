import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }
  setPatientSession(patientData: any) {
    localStorage.setItem("patientData", JSON.stringify(patientData))
    this.router.navigate(['/patient/dashboard'])
  }

  getPatientSession() {
    return localStorage.getItem("patientData")
  }

  logOutPatient() {
    if (localStorage.getItem("patientData")) {
      localStorage.removeItem("patientData")
    }
    this.router.navigate(['/patient/login'])
  }

  isPatientLoggedIn() {
    if (localStorage.getItem("patientData")) {
      return true;
    }
    return false;
  }
}
