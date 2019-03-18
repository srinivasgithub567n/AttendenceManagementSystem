import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeformComponent } from './employeeform/employeeform.component';
import { HomebuttonsComponent } from './homebuttons/homebuttons.component';
import { ListofemployeesComponent } from './listofemployees/listofemployees.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { EmptyComponent } from './empty/empty.component';
import { ListofemployeedetailsComponent } from './listofemployeedetails/listofemployeedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeformComponent,
    HomebuttonsComponent,
    ListofemployeesComponent,
    WelcomePageComponent,
    routingComponents,
    EmptyComponent,
    ListofemployeedetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
