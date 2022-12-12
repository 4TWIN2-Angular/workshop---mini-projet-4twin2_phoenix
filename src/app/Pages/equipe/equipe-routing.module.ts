import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './components/ajout/ajout.component';
import { HomeEquipeComponent } from './components/home-equipe/home-equipe.component';
import { EquipeComponent } from './equipe/equipe.component';

const routes: Routes = [
  {path:"", component:EquipeComponent },
  {path:"ajouterEquipe", component:AjoutComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
