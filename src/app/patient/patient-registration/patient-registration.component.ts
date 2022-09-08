import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from 'src/app/services/patient-service.service';
import { PatientAccount } from './patient.interface';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  ptLogFail = 2;
  patReg = 2;
  deletallyy = 2;

  registrationForm: PatientAccount = {
    ptName: "",
    ptAge: 0,
    ptGmail: "",
    ptMobile: 0,
    ptUsername: "",
    ptPassword: ""

  }
  constructor(private router: Router, private _patientService: PatientService) { }

  ngOnInit(): void {
  }

  navigateToPatientLogin() {
    this.router.navigate(['/patient/login'])
  }

  onClickSubmit(result: PatientAccount) {
    this.registrationForm = result;

    this._patientService.patientRegistration(result).subscribe(
      (response: any) => {
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }

    );
  }

}
