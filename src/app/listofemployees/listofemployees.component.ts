import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-listofemployees',
  templateUrl: './listofemployees.component.html',
  styleUrls: ['./listofemployees.component.css']
})
export class ListofemployeesComponent implements OnInit {
  // visible=false;
  empname:string[]=["Srinu","Swarooop","Indra","Manoj","Chinna"];
  
  constructor() { }

  ngOnInit() {
    
  }
  
date=new Date();
entrytime;
exittime;
  // @Input('empname') empname:string[];
  // @Input('empid') empid:number[];

  entry(event:any)
  {
    console.log(this.date);
    this.entrytime=this.date;
    alert("you entered at "+this.entrytime);
  }

  exit(event:any)
  {
    console.log(this.date);
    this.exittime=this.date;
    alert("you exited at "+this.exittime);
  }

  userDelete(event)
  {
    
    this.empname.splice(this.empname.indexOf(event.target.name),1);
    alert("User "+event.target.name+" has been deleted successfully");
    
  }

}
