import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartementComponent } from './backOffice/add-departement/add-departement.component';
import { DashbordComponent } from './backOffice/dashbord/dashbord.component';
import { UpadetDepartementComponent } from 'src/app/backOffice/upadet-departement/upadet-departement.component';


import { HomeComponent } from './Pages/home/home.component';
import { ListDepartComponent } from './backOffice/list-depart/list-depart.component';

const routes: Routes = [
  {path:'', redirectTo:"home", pathMatch:"full"},
  {path:'formation', loadChildren: () => import('./Pages/formation-module/formation/formation.module').then(m=>m.FormationModule) },
  {path:'departement', loadChildren: () => import('./Pages/departement/departement-module/departement-module.module').then(m=>m.DepartementModuleModule) },
  {path:'home', component:HomeComponent},
  {path:'dashbord', component:DashbordComponent},
  {path:'addDepart/:id', component:AddDepartementComponent},
  {path:'editDepart/:id', component:UpadetDepartementComponent},
  {path:'ViewDepart/:id', component:ListDepartComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
