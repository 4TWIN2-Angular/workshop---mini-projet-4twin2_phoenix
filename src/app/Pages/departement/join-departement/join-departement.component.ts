import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DepartementService } from '../departement.service';
import { Departements } from '../departements';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-join-departement',
  templateUrl: './join-departement.component.html',
  styleUrls: ['./join-departement.component.css']
})
export class JoinDepartementComponent implements OnInit {

  constructor(private DeptService:DepartementService ,private ac:ActivatedRoute , private router:Router) { }
  
  id:any;

  dept:Departements=new Departements();
  verify:boolean=true;
  idEtudiant=3;

  ngOnInit(): void {
    this.ac.paramMap.subscribe(result=>{
     console.log(result);
      this.id=+result.get('id');
      this.DeptService.getDepartementById(this.id).subscribe(
          
        res => {
          this.dept=res;
          
         
  
        })

    });
  
   
  
    }
    join(idDepart:number | undefined){
      Swal.fire({
        title: "T'es sure de rejoidre le department "+this.dept.nomDepart+"?",
        text: "",
        icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Crée une Demande'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          this.DeptService.VerifyDemande(idDepart,this.idEtudiant).subscribe(
            res=>{
              this.verify=res.response;
              if(this.verify==true){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Vous avez Deja Crée un Demande!',
                  footer: 'Votre demande sera traité le plus tot possible'
                })
              }else{
                this.DeptService.joinDepartement(this.idEtudiant,idDepart ).subscribe(
              
                  res => {
                    if(res!=null){
                      this.dept=res;
                      console.log(this.dept)
                      Swal.fire('Votre demande a été crée en succées!', '', 'success')
                      this.router.navigate(['/home'])
                    }else{
                      Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Vous avez atteint le nombre maximum des demandes',
                        footer: 'Vous Pouvez pas depasser les 5 demandes'
                      })
                    }
                 
                   
            
                  })
              
                  
                  
              }
            }
          )
         
          
          
          
        } 
        //else if (result.isDenied) {
         
       // }
      })

    }
      
  

}
