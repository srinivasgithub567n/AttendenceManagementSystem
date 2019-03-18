import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listofemployeedetails',
  templateUrl: './listofemployeedetails.component.html',
  styleUrls: ['./listofemployeedetails.component.css']
})
export class ListofemployeedetailsComponent implements OnInit {

  empname:string[]=["Srinu","Swarooop","Indra","Manoj","Chinna"];
  employee_Hours_spent:number[]=[8,6,5,9,3];

  constructor() { }

  ngOnInit() {
  }

}
