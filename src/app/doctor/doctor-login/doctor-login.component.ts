import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  drLogFail=2;
  constructor() { }

  ngOnInit(): void {
  }

}