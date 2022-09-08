import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class SessionService {
  constructor(private router: Router) {}
  setPatientSession(patientData: any) {
    localStorage.setItem("patientData", JSON.stringify(patientData));
    this.router.navigate(["/patient/dashboard"]);
  }
  updatePatientSession(patientData: any) {
    localStorage.setItem("patientData", JSON.stringify(patientData));
  }

  getPatientSession() {
    return localStorage.getItem("patientData");
  }

  logOutPatient() {
    if (localStorage.getItem("patientData")) {
      localStorage.removeItem("patientData");
    }
    this.router.navigate(["/patient/login"]);
  }

  isPatientLoggedIn() {
    if (localStorage.getItem("patientData")) {
      return true;
    }
    return false;
  }

  //Admin Session Services
  setAdminSession(adminData: any) {
    localStorage.setItem("adminData", JSON.stringify(adminData));
    this.router.navigate(["/admin/dashboard"]);
  }
  updateAdminSession(adminData: any) {
    localStorage.setItem("adminData", JSON.stringify(adminData));
  }

  getAdminSession() {
    return localStorage.getItem("adminData");
  }

  logOutAdmin() {
    if (localStorage.getItem("adminData")) {
      localStorage.removeItem("adminData");
    }
    this.router.navigate(["/admin/login"]);
  }

  isAdminLoggedIn() {
    if (localStorage.getItem("adminData")) {
      return true;
    }
    return false;
  }
}
