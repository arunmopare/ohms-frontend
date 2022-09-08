import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/services/session.service";
import { PatientAccount } from "../patient.interface";

@Component({
  selector: "app-patient-update-profile",
  templateUrl: "./patient-update-profile.component.html",
  styleUrls: ["./patient-update-profile.component.css"],
})
export class PatientUpdateProfileComponent implements OnInit {
  patient: PatientAccount = {}
  u: number = 2;
  constructor(private _sessionService: SessionService) {

  }

  ngOnInit(): void {
    if (this._sessionService.isPatientLoggedIn()) {
      var session = this._sessionService.getPatientSession();
      if (session) {
        this.patient = JSON.parse(session)
      }
    }
  }
  onClickSubmit(result: any) {
    console.log('====================================');
    console.log(result);
    console.log('====================================');
  }
}
