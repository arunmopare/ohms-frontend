import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  HSPLIST: number = 0;
  addHspWindow: number = 0;
  hspReg: number = 0;
  editHspProf: number = 0;
  hspprofile: number = 0;
  CONTACTLIST: number = 0;

  items: any = [];
  hspList: any = [];
  constructor(private _sessionService: SessionService, private _router: Router) { }

  ngOnInit(): void {
    if (!this._sessionService.isAdminLoggedIn()) {
      this._router.navigate(['/admin/login'])
    }
  }

}
