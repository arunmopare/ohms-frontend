import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/services/session.service";
import { PatientAccount } from "../patient.interface";

@Component({
  selector: "app-patient-common-header",
  templateUrl: "./patient-common-header.component.html",
  styleUrls: ["./patient-common-header.component.css"],
})
export class PatientCommonHeaderComponent implements OnInit {
  patient: PatientAccount = {};
  constructor(private _sessionService: SessionService) {}

  ngOnInit(): void {
    if (this._sessionService.isPatientLoggedIn()) {
      var session = this._sessionService.getPatientSession();
      if (session) {
        this.patient = JSON.parse(session);
      }
    }
  }
}
