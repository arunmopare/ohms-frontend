import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import {
  PatientAccount,
  PatientAuthLoginInterface,
} from "../patient/patient.interface";
import { ROOT_API_ENDPOINT } from "./constants";

@Injectable({
  providedIn: "root",
})
export class PatientService {
  private _apiEndpoint = ROOT_API_ENDPOINT;

  private _registrationRoute = "patient/register";

  private _loginRoute = "patient/AuthPtlogin";
  private _updateRoute = "patient/upd-patient";

  private _registerUserUrl = this._apiEndpoint + this._registrationRoute;
  private _loginPatientUrl = this._apiEndpoint + this._loginRoute;
  private _updatePatientUrl = this._apiEndpoint + this._updateRoute;

  constructor(private http: HttpClient) { }

  patientRegistration(data: PatientAccount): any {
    console.log("data", data);
    return this.http.post<any>(this._registerUserUrl, data);
  }

  patientLogin(data: PatientAuthLoginInterface): Observable<PatientAccount> {
    console.log("PatientLoginData", data);
    return this.http.post<any>(this._loginPatientUrl, data);
  }

  patientUpdate(data: PatientAccount): Observable<PatientAccount> {
    console.log("PatientUpdateData", data);
    return this.http.post<any>(this._updatePatientUrl, data);
  }
}
