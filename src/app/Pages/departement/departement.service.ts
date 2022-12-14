import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {
  url:string="";


  constructor(private http:HttpClient , ) {
    this.url=environment.backendurl;
   }
   getDepartementByUniversite(id:string):Observable<any>{
    return this.http.get(this.url+'/departements/universite/'+id, 
     {
      
     }
    )
  }
  joinDepartement(idEtudiant:number,idDepartement:number | undefined):Observable<any>{
    return this.http.post(this.url+'/departements/addDemande/'+idEtudiant+'/'+idDepartement, 
     {
      
     }
    )
  }
  getDepartementById(id:number):Observable<any>{
    return this.http.get(this.url+'/departements/'+id, 
     {
      
     }
    )
  }
  VerifyDemande(idDepart:number,idEtudiant:number):Observable<any>{
    return this.http.get(this.url+'/departements/demand/'+idDepart+'/'+idEtudiant, 
     {
      
     }
    )
  }
  getDemandesByUser(idEtudiant:number):Observable<any>{
    return this.http.get(this.url+'/departements/demand/'+idEtudiant, 
     {
      
     }
    )
  }
  CancelDemande(idEtudiant:number,idDepart:number,):Observable<any>{
    return this.http.put(this.url+'/departements/demand/'+idEtudiant+'/'+idDepart, 
     {
      
     }
    )
  }

}
