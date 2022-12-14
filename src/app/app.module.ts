import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroComponent } from './Pages/hero/hero.component';
import { FormationComponent } from './Pages/formation/formation.component';
import { HomeComponent } from './Pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { NavbarBackooficeComponent } from './backOffice/navbar-backoofice/navbar-backoofice.component';
import { FooterBackOfficeComponent } from './backOffice/footer-back-office/footer-back-office.component';
import { AddDepartementComponent } from './backOffice/add-departement/add-departement.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpadetDepartementComponent } from 'src/app/backOffice/upadet-departement/upadet-departement.component';
import { ListDepartComponent } from 'src/app/backOffice/list-depart/list-depart.component';








@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    FooterComponent,
    HeroComponent,
    //FormationComponent,
    HomeComponent,
    DashbordComponent,
    NavbarBackooficeComponent,
    FooterBackOfficeComponent,
    AddDepartementComponent,
    UpadetDepartementComponent,
    ListDepartComponent
 
  //  MyDemandesComponent,
  //  JoinDepartementComponent,
  
   // DepartementDetailComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
