import { Component, OnInit } from "@angular/core";
import { PatientAccount } from "../patient.interface";

@Component({
  selector: "app-patient-common-header",
  templateUrl: "./patient-common-header.component.html",
  styleUrls: ["./patient-common-header.component.css"],
})
export class PatientCommonHeaderComponent implements OnInit {
  patient: any;
  constructor() {}

  ngOnInit(): void {}
}
