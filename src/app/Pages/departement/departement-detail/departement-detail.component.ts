import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DepartementService } from '../departement.service';
import { Departements } from '../departements';


@Component({
  selector: 'app-departement-detail',
  templateUrl: './departement-detail.component.html',
  styleUrls: ['./departement-detail.component.css']
})
export class DepartementDetailComponent implements OnInit {

  constructor(private DepartementService:DepartementService ,private ActivatedRoute:ActivatedRoute) { }
  id:any=this.ActivatedRoute.snapshot.params['id'];
  Universite="";
  Departements:Array<Departements>=[];

  ngOnInit(): void {
    this.DepartementService.getDepartementByUniversite(this.id).subscribe(
        
      res => {
        this.Departements=res.departemnts;
        this.Universite=res.nomUniv;
       

      })
  }

  changeToSurNom(index:number){
    const element = document.getElementById('elem'+index) as HTMLElement;
    element.innerHTML=""+this.Departements[Number(index)].surNomDepart;

  }
  changeToNom(index:number){
    const element = document.getElementById('elem'+index) as HTMLElement;
    element.innerHTML=""+this.Departements[Number(index)].nomDepart;

  }
  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}
}
