import { Component, Input } from '@angular/core';
import { Grupo } from '../../models/grupo';

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

  constructor() {
    console.log('Hello GrupoComponent Component');
  }

}
