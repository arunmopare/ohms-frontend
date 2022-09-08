import { Injectable } from '@angular/core';
import { Hospital } from './hospital';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  private apiServerUrl ="http://localhost:4200/"
  constructor(private http: HttpClient) { }

  public getHospitalList(): Observable<Hospital[]> {
    return this.http.get<Hospital[]>(`${this.apiServerUrl}/hospitalList`);
  }
}
