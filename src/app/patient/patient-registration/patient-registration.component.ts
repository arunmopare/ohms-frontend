import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientAccount } from './patient.interface';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  ptLogFail = 1;
  patReg = 1;
  deletallyy = 0;

  registrationForm: PatientAccount = {
    ptName: "",
    age: 0,
    ptGmail: "",
    ptMobile: 0,
    ptUsername: "",
    ptPassword: ""

  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToPatientLogin() {
    this.router.navigate(['/patient/login'])
  }

  onClickSubmit(result: PatientAccount) {
    this.registrationForm = result;
    console.log('====================================');
    console.log(this.registrationForm);
    console.log('====================================');
  }

}
