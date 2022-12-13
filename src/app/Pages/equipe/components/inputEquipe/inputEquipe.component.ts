import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EquipeModel } from '../../models/equipe.model';
import { EquipesService } from '../../services/equipes.service';

@Component({
  selector: 'app-inputEquipe',
  templateUrl: './inputEquipe.component.html',
  styleUrls: ['./inputEquipe.component.css']
})
export class InputEquipeComponent implements OnInit {
  @Input() dataEquipe!: EquipeModel;

  constructor(private formService: EquipesService,private router: Router) { }

  ngOnInit() {

 
  }

  deleteEquipe(equipe: EquipeModel): void {
   
    Swal.fire({
      title: 'êtes-vous sûr de supprimer cette équipe!!',
      text: 'Click ici',
      icon: 'error',
      showCancelButton: true,
      confirmButtonText: 'confirmer',
      cancelButtonText: 'cancel'
    })
.then(result => {
  if (result.value) {
    this.formService.deleteEquipe(equipe.idEquipe).subscribe();
    Swal.fire('supprimé', 'votre equipe est déjà supprimé!', 'success');
  } else if (result.dismiss=== Swal.DismissReason.cancel) {
    Swal.fire('fermé', 'votre opperation est fermé ', 'error');
  }
  
})
  }
 
  updateEquipe(equipe: EquipeModel): void {
    this.router.navigate(['ajouterEquipe',{id:equipe.idEquipe}]);

  }

      getColor():string{
       if (this.dataEquipe.niveau === "JUNIOR") {
         return "blue";
       } else if (this.dataEquipe.niveau === "SENIOR") {
        return "green";
       }else {
        return "red";
       }
      }
}
