import { Component, OnInit } from "@angular/core";
import { AdminAuthLoginInterface } from "../admin";
import { AdminService } from "../../services/admin-service.service";
import { SessionService } from "src/app/services/session.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  AdmLogFail: number = 1;
  admin: AdminAuthLoginInterface = {};
  constructor(
    private _adminService: AdminService,
    private _sessionService: SessionService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (this._sessionService.isAdminLoggedIn()) {
      this._router.navigate(['/admin/dashboard'])
    }
    // if (this._sessionService.isAdminLoggedIn()) {
    //   var session = this._sessionService.getAdminSession();
    //   if (session) {
    //     this.admin = JSON.parse(session);
    //   }
    // }
  }
  onClickSubmit(result: AdminAuthLoginInterface) {
    this._adminService.adminAuthentication(result).subscribe(
      (response: any) => {
        console.log("patient login response", response);
        this._sessionService.setAdminSession(response);
        this.admin = response;
      },
      (error: any) => {
        console.log("inside error", error);
        this.AdmLogFail = 0;
      }
    );
  }
}
