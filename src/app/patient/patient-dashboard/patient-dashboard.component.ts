import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  constructor(private _sessionService: SessionService) { }

  ngOnInit(): void {
  }
  logPatientOut() {
    this._sessionService.logOutPatient()
  }

}
