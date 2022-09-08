import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AdminAuthLoginInterface } from "../admin/admin";
import { ROOT_API_ENDPOINT } from "./constants";
@Injectable({
  providedIn: "root",
})
export class AdminServiceService {
  private _apiEndpoint = ROOT_API_ENDPOINT;
  private _loginRoute = "admin/AuthentAdmlogin";
  private _authAdminUrl = this._apiEndpoint + this._loginRoute;
  constructor(private http: HttpClient) { }

  adminAuthentication(data: AdminAuthLoginInterface): any {
    console.log("data", data);
    return this.http.post<any>(this._authAdminUrl, data);
  }
}
