import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartementModuleRoutingModule } from './departement-module-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { DepartementDetailComponent } from '../departement-detail/departement-detail.component';
import { JoinDepartementComponent } from '../join-departement/join-departement.component';
import { MyDemandesComponent } from '../my-demandes/my-demandes.component';







@NgModule({
  declarations: [
    DepartementDetailComponent,
    JoinDepartementComponent,
    MyDemandesComponent,

    

    
    
    
  ],
  imports: [
    CommonModule,
    DepartementModuleRoutingModule,
    HttpClientModule

  ]
})
export class DepartementModuleModule { }
