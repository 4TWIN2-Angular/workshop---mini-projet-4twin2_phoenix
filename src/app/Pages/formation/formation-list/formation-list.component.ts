import { Component, OnInit } from '@angular/core';
import {Formation} from "../model/formation";
import {FormationService} from "../service/formation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  public formations!: Formation[];
  public hide = false;
  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit(): void {
    this.formationService.getAllU().subscribe(
      (data: Formation[]) => {
        this.formations = data;
        console.log(this.formations);
      },
      () => {
        console.log('error')
      },
      () => {}
    );
  }
  deleteFormation(formation: Formation) {
    let i = this.formations.indexOf(formation);
    if (confirm("Are you sure to delete " + formation.nomFormation)) {
      this.formationService.deleteFormation(formation).subscribe(
        ()=> { this.formations.splice(i, 1)}

      )

    }
  }

  assign(idFormation: number) {
    this.formationService.assign(idFormation,1).subscribe()
    this.hide= true;
  }
}
