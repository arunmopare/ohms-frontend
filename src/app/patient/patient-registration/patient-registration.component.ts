import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {
  ptLogFail = 0;
  patReg = 0;
  deletallyy = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
