import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { EmptyComponent } from './empty/empty.component';
import { ListofemployeedetailsComponent } from './listofemployeedetails/listofemployeedetails.component';

const routes: Routes = [
  {path:"employeeform",component:EmployeeformComponent},
  {path:"listofemployees",component:ListofemployeesComponent},
  {path:"empty",component:EmptyComponent},
  {path:"listofemployeedetails",component:ListofemployeedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[EmployeeformComponent,ListofemployeesComponent,EmptyComponent,ListofemployeedetailsComponent];
