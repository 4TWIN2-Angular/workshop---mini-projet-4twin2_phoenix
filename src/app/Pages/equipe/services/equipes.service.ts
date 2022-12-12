import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators as v } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipesService {

  formGroup!: FormGroup;

  API_ENDPOINT = 'http://localhost:9090/equipe/';



constructor(private fb: FormBuilder, private http: HttpClient) { }

buildForm(): void {
  this.formGroup = this.fb.group({
    idEquipe: [''],
    nomEquipe: ['', [v.required, v.minLength(5)]],
    salle: ['',  [v.required, v.maxLength(3)]],
    thematique: ['',  [v.required, v.minLength(5)]],
    photos: [''],
    niveau: ['JUNIOR'],
  });
}

postEquipe(equipe: any ):Observable<any> {
  return this.http.post(this.API_ENDPOINT+'add', equipe );
}
getEquipes():Observable<any>{
  return this.http.get(this.API_ENDPOINT+'get');
}

deleteEquipe(id: number) {
  return this.http.delete(this.API_ENDPOINT+'delete/'+id);
}

updateEquipe(id:number, equipe: any ):Observable<any> {
  return this.http.put(this.API_ENDPOINT+'update/'+ id, equipe );
}

getByIdEquipe(id: number) {
  return this.http.get(this.API_ENDPOINT+'get/'+id);
}
}
