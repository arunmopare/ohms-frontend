import { Component, OnInit } from "@angular/core";
import { PatientService } from "src/app/services/patient-service.service";
import { SessionService } from "src/app/services/session.service";
import { PatientAccount } from "../patient.interface";

@Component({
  selector: "app-patient-update-profile",
  templateUrl: "./patient-update-profile.component.html",
  styleUrls: ["./patient-update-profile.component.css"],
})
export class PatientUpdateProfileComponent implements OnInit {
  patient: PatientAccount = {};
  u: number = 2;
  constructor(
    private _sessionService: SessionService,
    private _patientService: PatientService
  ) {}

  ngOnInit(): void {
    if (this._sessionService.isPatientLoggedIn()) {
      var session = this._sessionService.getPatientSession();
      if (session) {
        console.log(session);

        this.patient = JSON.parse(session);
      }
    }
  }
  onClickSubmit(result: PatientAccount) {
    console.log(result);
    this._patientService.patientUpdate(result).subscribe(
      (response: any) => {
        console.log("patient login response", response);
        this._sessionService.updatePatientSession(response);
        this.patient = response;
        this.u = 1;
      },
      (error: any) => {
        console.log(error);
        this.u = 3;
      }
    );
  }
}
