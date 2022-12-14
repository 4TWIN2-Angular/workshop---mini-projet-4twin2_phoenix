import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeroComponent } from './Components/hero/hero.component';
import { FormationComponent } from './Pages/formation/formation.component';
import { HomeComponent } from './Pages/home/home.component';
import { FormationDetailComponent } from './Pages/formation/formation-detail/formation-detail.component';
import { SujetDetailComponent } from './Components/formation/sujet-detail/sujet-detail.component';
import { AllSujetComponent } from './Components/formation/list-sujet/all-sujet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    FormationComponent,
    HomeComponent,
    FormationDetailComponent,
    SujetDetailComponent,
    AllSujetComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
