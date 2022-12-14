import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementDetailComponent } from '../departement-detail/departement-detail.component';
import { JoinDepartementComponent } from '../join-departement/join-departement.component';
import { MyDemandesComponent } from '../my-demandes/my-demandes.component';



const routes: Routes = [
  {path:'', component:MyDemandesComponent},
  {path:'demandes', component:MyDemandesComponent},
  {path:':id', component:DepartementDetailComponent, children:[
    {path:'join/:id', component:JoinDepartementComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartementModuleRoutingModule { }
