import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-admin-common-header',
  templateUrl: './admin-common-header.component.html',
  styleUrls: ['./admin-common-header.component.css']
})
export class AdminCommonHeaderComponent implements OnInit {

  constructor(private _router: Router, private _sessionService: SessionService) {

  }

  ngOnInit(): void {
  }
  logAdminOut() {
    this._sessionService.logOutAdmin();
  }

}
