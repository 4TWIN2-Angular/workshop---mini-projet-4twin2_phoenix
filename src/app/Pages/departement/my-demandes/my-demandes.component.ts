import { Component, OnInit } from '@angular/core';
import { Demande } from '../demande';
import { DepartementService } from '../departement.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-demandes',
  templateUrl: './my-demandes.component.html',
  styleUrls: ['./my-demandes.component.css']
})
export class MyDemandesComponent implements OnInit {

  constructor(private DeptService:DepartementService , private router:Router) { }
  etudiantId=3;
  demandes:Array<Demande>=[];
  statut=null

  ngOnInit(): void {
    this.DeptService.getDemandesByUser(this.etudiantId).subscribe(
      res=>{
        this.demandes=res;

      
       

      }

    )
    
  }

  changeStatut(statut:string){
    this.statut=statut;
    this.DeptService.getDemandesByUser(this.etudiantId).subscribe(
      res=>{
        this.demandes=res;
        if(statut!='All'){
          this.demandes = this.demandes.filter(book => book.statut === statut);
        }
      

      
       

      }

    )

  }
  cancelDemande(nomDepart:any,idDepart:any){
    Swal.fire({
      title: "T'es sure d'annuler ton demande de rejoindre le department "+nomDepart+"?",
      text: "",
      icon: 'warning',
showCancelButton: true,
confirmButtonColor: '#3085d6',
cancelButtonColor: '#d33',
confirmButtonText: 'Cancel une Demande'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.DeptService.CancelDemande(this.etudiantId,idDepart).subscribe(
          res=>{
            Swal.fire('Votre demande a été annuler!', '', 'success')
            this.router.navigate(['/home'])
          }
          
        )
      } 
      //else if (result.isDenied) {
       
     // }
    })
  }

  

}
