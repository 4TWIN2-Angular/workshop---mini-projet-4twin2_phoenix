import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { FormationService } from '../service/formation.service';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Formation} from "../model/formation";


@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {
  formationForm!: FormGroup ;
  id!: number;
  list!: Formation[]
  editMode = false;
  mode!:String;
  pattern="^[ a-zA-Z][a-zA-Z ]*$";


  constructor(private route: ActivatedRoute, private formationService: FormationService, private router: Router) {
  }


ngOnInit(): void {
    this.formationService.getAllU().subscribe(
      (data:Formation[])=>{
        this.list=data;
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            console.log(params)
            this.editMode = params['id'] != null;
            if (this.editMode) {
              this.mode = "Update"
            } else {
              this.mode = "Add"
            }
            this.initForm()
          console.log(this.formationForm)
          },
          () => { console.log('error') },
          () => {  }
        )
      }
    )
  }
  private initForm() {
    let formName = '';
    let formDescription = '';
    let formImage = '';
    let formDateDebut = null;
    let formDateFin = null


    if(this.editMode) {
      const form = this.list.find(f => f.idFormation == this.id)!
      formName = form.nomFormation
      formDescription = form.description
      formImage = form.image
      formDateDebut = form.dateDebutFormation
      formDateFin = form.dateFinFormation

    }
    this.formationForm = new FormGroup({
      'nomFormation': new FormControl(formName,[ Validators.required,Validators.pattern(this.pattern),Validators.minLength(3)]),
      'description': new FormControl(formDescription, Validators.required),
      'image': new FormControl(formImage, Validators.required),
      'dateDebutFormation': new FormControl(formDateDebut, Validators.required),
      'dateFinFormation': new FormControl(formDateFin, Validators.required),

    })
  }

  Back() {
    this.router.navigate(['/formation'])
  }

  onSubmit() {
    if (this.editMode) {
      this.formationService.updateFormation(this.id,this.formationForm.value).subscribe()
    } else {
      this.formationService.addFormation(this.formationForm.value).subscribe()
    }
    this.router.navigate(['/formation'])
  }

}
