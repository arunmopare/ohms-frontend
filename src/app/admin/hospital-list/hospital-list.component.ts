import { Component, OnInit } from '@angular/core';
import { Hospital } from '../admin-interfaces';

@Component({
  selector: 'app-hospital-list',
  templateUrl: './hospital-list.component.html',
  styleUrls: ['./hospital-list.component.css']
})
export class HospitalListComponent implements OnInit {
  HSPLIST = 1;

  hspList: Hospital[] = [{
    hspId: "01",
    hspName: "Test",
    hspAdd: "Pune"
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
