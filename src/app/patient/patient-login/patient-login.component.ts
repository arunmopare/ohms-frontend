import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient-service.service';
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
  constructor(private _patientService: PatientService) { }

  ngOnInit(): void {
  }

  onClickSubmit(result: PatientAuthLoginInterface) {
    this.patientLoginData = result;

    if (result != null) {
      this._patientService.patientLogin(result).subscribe(
        (response: any) => {
          console.log("Patient login response", response);
          localStorage.setItem('userData', JSON.stringify(response.body))
          // set state here
        },
        (error: any) => {
          console.log(error);
        }
      );
    }
  }
}
