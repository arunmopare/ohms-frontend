import { Component, OnInit } from "@angular/core";
import { AdminAuthLoginInterface } from "../admin";
import { AdminServiceService } from "../../services/admin-service.service";
import { SessionService } from "src/app/services/session.service";
@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.css"],
})
export class AdminLoginComponent implements OnInit {
  AdmLogFail: number = 1;
  admin: AdminAuthLoginInterface = {};
  constructor(
    private _adminService: AdminServiceService,
    private _sessionService: SessionService
  ) {}

  ngOnInit(): void {
    if (this._sessionService.isAdminLoggedIn()) {
      var session = this._sessionService.getAdminSession();
      if (session) {
        console.log(session);

        this.admin = JSON.parse(session);
      }
    }
  }
  onClickSubmit(result: AdminAuthLoginInterface) {
    this._adminService.adminAuthentication(result).subscribe(
      (response: any) => {
        console.log("patient login response", response);
        this._sessionService.setAdminSession(response);
        this.admin = response;
      },
      (error: any) => {
        console.log(error);
        this.AdmLogFail == 0;
      }
    );
  }
}
