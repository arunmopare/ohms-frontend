import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient-service.service';
import { SessionService } from 'src/app/services/session.service';
import { PatientAuthLoginInterface } from '../patient.interface';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  patientLoginData: PatientAuthLoginInterface = {
    ptUsername: "",
    ptPassword: ""
  }

  ptPassFail = 2;
  ptPassUpdated = 2;
  ptLogFail = 2;
  constructor(private router: Router, private _patientService: PatientService, private _sessionService: SessionService) { }

  ngOnInit(): void {
    if (this._sessionService.isPatientLoggedIn()) {
      this.router.navigate(['/patient/dashboard'])
    }
  }

  onClickSubmit(result: PatientAuthLoginInterface) {
    this.patientLoginData = result;

    if (result != null) {
      this._patientService.patientLogin(result).subscribe(
        (response: any) => {
          console.log("Patient login response", response);
          this._sessionService.setPatientSession(response)
          // set state here
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
