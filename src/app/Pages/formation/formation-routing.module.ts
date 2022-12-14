import { SujetDetailComponent } from '../../Components/formation/sujet-detail/sujet-detail.component';
import { FormationDetailComponent } from '../../Pages/formation/formation-detail/formation-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './formation.component';
import {FormationListComponent} from "./formation-list/formation-list.component";
import {FormationFormComponent} from "./formation-form/formation-form.component";

const routes: Routes = [
  {path:'', component:FormationComponent, children:[
      {path:'', component:FormationListComponent},
    {path:'formation-detail/:id', component:FormationDetailComponent},
    {path:'sujet-detail/:id', component:SujetDetailComponent},
    {path:'new',component:FormationFormComponent},
      {path:'update/:id', component: FormationFormComponent},




    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationRoutingModule { }
