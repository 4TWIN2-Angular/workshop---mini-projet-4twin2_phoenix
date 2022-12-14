import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationRoutingModule } from './formation-routing.module';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    FormationListComponent,
  FormationFormComponent,
  ],
  imports: [
    CommonModule,
    FormationRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FormationModule { }
