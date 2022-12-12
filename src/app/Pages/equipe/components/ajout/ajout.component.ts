import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OPTION_EQUIPE } from '../../config/equipe.config';
import { EquipesService } from '../../services/equipes.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
})
export class AjoutComponent implements OnInit {
  
  equipeFormGroup!: FormGroup;

  niveauItems = OPTION_EQUIPE;

  equipeId!:string | null;

  isSubmitted = false;

  constructor(private formService: EquipesService, private router: Router,private route:ActivatedRoute) { 

    this.equipeId=this.route.snapshot.paramMap.get('id') 
    
  }
 
  ngOnInit(): void {
    this.formService.buildForm();
    this.equipeFormGroup = this.formService.formGroup;
    this.patchEquipeForm();
    
  }

  isUpdate():boolean{
    return this.route.snapshot.paramMap.get('id') ? true:false 
  }

  patchEquipeForm():void{
    console.log(this.isUpdate())
    if (this.isUpdate()) {
      this.formService.getByIdEquipe(parseInt(this.equipeId || '')).subscribe((res)=>{
        this.equipeFormGroup.patchValue(res);
      });
    }
  }



onSubmit(): void {
  if (this.equipeFormGroup.invalid) {
    return;
  }
  this.isSubmitted = true;
  if (this.isUpdate()) {
    this.equipeFormGroup.get('idEquipe')?.setValue(parseInt(this.equipeId || ''));
    Swal.fire({
      title: 'êtes-vous sûr de modifier cette équipe!! ',
      text: 'Click ici',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'confirmer',
      cancelButtonText: 'cancel'
    })
.then(result => {
  if (result.value) {
    this.formService.updateEquipe(parseInt(this.equipeId || ''), this.equipeFormGroup.value).subscribe();
    Swal.fire('Modifié', 'votre est equipe est déjà modifié ', 'success');
    this.router.navigate(['equipe']);
  } else if (result.dismiss=== Swal.DismissReason.cancel) {
    Swal.fire('fermé', 'votre opperation est fermé ', 'error');
  }
  
})
   
  } else {
    this.formService.postEquipe(this.equipeFormGroup.value).subscribe();
    this.router.navigate(['equipe']);
  }
  
 

}

getBtnLabel(): string {
  return this.isUpdate() ? 'Modifier' : 'Enregistrer';
}

getLabelTitre() : string {
  return this.isUpdate() ? 'Modification' : 'Ajout'
}
}
