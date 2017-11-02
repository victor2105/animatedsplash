import { Component, Input } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { CelulaComponent } from '../celula/celula';
import { Celula } from '../../models/celula';

/**
 * Generated class for the GrupoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'grupo',
  templateUrl: 'grupo.html'
})
export class GrupoComponent {

  @Input() grupo: Grupo;
  @Input() editar: boolean;
  
  editarTitulo: boolean;

  constructor() {
    console.log('Hello GrupoComponent Component');
  }

  novaCelula() {
    let celula = new Celula();
    celula.nome = "Nooo";
    celula.valor = 1;
    if (!this.grupo.celulas)
      this.grupo.celulas = [];
    this.grupo.celulas.push(celula);
    this.grupo.calcSum();
  }

  btnEditarTitulo() {
    this.editarTitulo = true;
    this.editar = true;
  }

  saveTitle(){
    // Save the group
    this.editarTitulo = false;
    this.editar = false;
  } 



}
