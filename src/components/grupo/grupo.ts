import { Component, Input } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { CelulaComponent } from '../celula/celula';
import { Celula } from '../../models/celula';
import { ModalController } from 'ionic-angular';
import { CelulaModalPage } from '../../pages/celula-modal/celula-modal';
import { Cel } from '../../models/cel';

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

  @Input() grupoName: string;
  @Input() key: string;
  @Input() editar: boolean;
  
  editarTitulo: boolean;

  constructor(private modalCtrl: ModalController) {
  }

  novaCelula() {
  }

  btnEditarTitulo() {
    this.editarTitulo = true;
    this.editar = true;
  }

  saveTitle(){
  } 

  editarCelula(cel: Cel){
    let modal = this.modalCtrl.create(CelulaModalPage, {data: cel });
    modal.present();
  }

}
