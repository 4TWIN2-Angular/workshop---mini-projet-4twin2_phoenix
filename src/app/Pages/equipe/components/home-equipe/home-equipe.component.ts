import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, tap } from 'rxjs';
import { EquipeModel } from '../../models/equipe.model';
import { EquipesService } from '../../services/equipes.service';

@Component({
  selector: 'app-home-equipe',
  templateUrl: './home-equipe.component.html',
  styleUrls: ['./home-equipe.component.css']
})
export class HomeEquipeComponent implements OnInit {

  constructor(private formService: EquipesService,private router: Router) { }

  searchName = '';

  equipes$: Observable<EquipeModel[]> | undefined;

  ngOnInit(): void {
    setTimeout(() => {//attendre Data!!
      this.loadData();
    },);
  }

  loadData():void{
    this.equipes$ = this.formService.getEquipes();
  }
}

