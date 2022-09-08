import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospital-common-header',
  templateUrl: './hospital-common-header.component.html',
  styleUrls: ['./hospital-common-header.component.css']
})
export class HospitalCommonHeaderComponent implements OnInit {
  hospital:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
