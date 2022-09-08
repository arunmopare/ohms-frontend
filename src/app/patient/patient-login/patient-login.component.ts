import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {
  ptPassFail = 0;
  ptPassUpdated = 0;
  ptLogFail = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
