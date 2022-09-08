import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PatientAccount } from '../patient/patient-registration/patient.interface';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private _apiEndpoint = "http://localhost:9090/";

  private _registrationRoute = "patient/register"

  private _registerUserUrl = this._apiEndpoint + this._registrationRoute;

  constructor(private http: HttpClient) { }

  patientRegistration(data: PatientAccount): any {
    console.log('data', data);
    return this.http.post<any>(this._registerUserUrl, data);
  }


}

