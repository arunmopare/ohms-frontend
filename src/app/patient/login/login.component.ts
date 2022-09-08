import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ptPassFail = 0;
  ptPassUpdated = 0;
  ptLogFail = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
