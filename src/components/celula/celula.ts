import { Component, Input } from '@angular/core';
import { Celula } from '../../models/celula';

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
  celula: Celula;

  constructor() {
    console.log('Hello CelulaComponent Component');
    //console.log(this.celula.nome);
  }

}
