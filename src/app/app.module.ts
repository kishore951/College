import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchemployeeComponent } from './searchemployee/searchemployee.component';
import { Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AddstudentComponent
  },
  {
    path:"search",component:SearchemployeeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddstudentComponent,
    NavbarComponent,
    SearchemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
