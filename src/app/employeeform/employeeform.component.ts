import { Component, OnInit, Input } from '@angular/core';
import {FormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-employeeform',
  templateUrl: './employeeform.component.html',
  styleUrls: ['./employeeform.component.css']
})
export class EmployeeformComponent implements OnInit {
  visible=false;
empname:string[]=[];
empid:number[]=[];
  constructor() { }

  

  ngOnInit() {
  }
 
  onClickSubmit(formdata)
  {
    console.log("employee name "+formdata.empname+" and employee id "+formdata.empid);
    this.empname.push(formdata.empname);
    this.empid.push(formdata.empid);
    console.log("below is the employee list");
    for(var i=0;i<this.empname.length;i++)
    {
console.log(this.empname[i]+this.empid[i]);
    }
    document.getElementById("data").innerHTML="!... Hi "+formdata.empname+" you have been successfully added to the Employee list ....!" ;
      
  }

}
