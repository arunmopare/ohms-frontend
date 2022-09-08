import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  HSPLIST :number=0;
  addHspWindow :number=0;
  hspReg :number=0;
  editHspProf :number=0;
  hspprofile :number=0;
  CONTACTLIST :number=0;
  
  items:any=[];
  hspList:any=[];
  constructor() { }

  ngOnInit(): void {
  }

}
