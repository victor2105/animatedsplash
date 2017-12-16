import { Component, Input } from '@angular/core';
import { Cel } from '../../models/cel';

/**
 * Generated class for the CelulaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'celula',
  templateUrl: 'celula.html'
})
export class CelulaComponent {

  @Input()
  cel: Cel;

  constructor() {
    console.log('Hello CelulaComponent Component');
    //console.log(this.celula.nome);
  }

}
