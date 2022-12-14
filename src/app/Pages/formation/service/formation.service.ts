import { Formation } from './../../../Pages/formation/model/formation';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormationService {
  formationUrl="http://localhost:9090/kaddem/formation";

  constructor(private _http:HttpClient) { }

  getFormation(id:number):Observable<Formation>{

    return this._http.get<Formation>(this.formationUrl+"/formation"+id);
  }


  getAllU(){
    return this._http.get<Formation[]>(this.formationUrl);
  }


  addFormation(formation:Formation):Observable<Formation>{
    console.log("service appelé");
    return this._http.post<Formation>(this.formationUrl+"/addFormation",formation);
  }

  deleteFormation(formation:Formation){
    return this._http.delete<Formation>(this.formationUrl+"/formation/"+formation.idFormation);
  }

  updateFormation(id:number,formation:Formation){
    return this._http.put<Formation>(this.formationUrl+"/formation/"+id,formation);
  }
  assign(idF:number,idE: number){
    // @ts-ignore
    return this._http.put(this.formationUrl+"/assignEtudiant/"+idF+"/"+idE);
  }




}
