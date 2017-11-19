import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Grupo } from '../../models/grupo';

/*
  Generated class for the GruposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GruposProvider {

  grupos: Grupo[];

  grupo: Grupo;
  
  constructor() {
  }

  getGrupos(){
    if(!this.grupos){
      this.grupos = new Array<Grupo>();
    }
    return this.grupos;
  }

  addGrupo(grupos: Grupo[]){
    let grupo: Grupo;
    grupo = new Grupo();
    grupo.nome = "Novo grupo";
    grupo.celulas = [];
    grupos.push(grupo);
    return grupos;
  }
  


}
