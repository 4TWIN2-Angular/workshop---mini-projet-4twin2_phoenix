import { Pipe, PipeTransform } from '@angular/core';
import { EquipeModel } from '../models/equipe.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(equipes: EquipeModel[], name?: string): EquipeModel[] {
    if (!equipes) return [];
    if (!name) return equipes;
   return this.serachEquipe(equipes, name);
   
  }

  private serachEquipe(equipes: EquipeModel[], name?: any): EquipeModel[] {
    let result:  EquipeModel[] = [];
    equipes.forEach((equipe) => {
      if (equipe.nomEquipe.toLowerCase().includes(name)) {
        result.push(equipe);
      }
    });
    return result ;
  }
}
