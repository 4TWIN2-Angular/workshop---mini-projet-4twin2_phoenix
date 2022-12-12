import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipeRoutingModule } from './equipe-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { HomeEquipeComponent } from './components/home-equipe/home-equipe.component';
import { AjoutComponent } from './components/ajout/ajout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputEquipeComponent } from './components/inputEquipe/inputEquipe.component';
import { FilterPipe } from './pipe/filter.pipe';



@NgModule({
    declarations: [
        EquipeComponent,
        HomeEquipeComponent,
        AjoutComponent,
        InputEquipeComponent,
        FilterPipe,
    ],
    imports: [
        CommonModule,
        EquipeRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ]
})
export class EquipeModule { }
