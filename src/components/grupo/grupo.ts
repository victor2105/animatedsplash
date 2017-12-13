import { Component, Input } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { CelulaComponent } from '../celula/celula';
import { ModalController } from 'ionic-angular';
import { CelulaModalPage } from '../../pages/celula-modal/celula-modal';
import { Cel } from '../../models/cel';
import { CelListService } from '../../services/cel-list/cel-list.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

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
export class GrupoComponent implements OnInit {
  

  @Input() key: string = "-1";
  @Input() editar: boolean = false;
  @Input() group: Cel = new Cel();
  
  editarTitulo: boolean;

  public celList$ : Observable<Cel[]> ;

  constructor(private modalCtrl: ModalController,
    private celDB : CelListService) {
      // db.list('/items', ref => ref.orderByChild('size').equalTo('large'))
      /**/
      this.celList$ = this.celDB
      .getCelWithParent(this.group.key) // children of this.project
      .snapshotChanges()// key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  ngOnInit(): void {
   
  }

  newCel(name){
    let cel = new Cel();
    cel.name = name;
    cel.value = 0;

    console.log(this.group);
    // Do not save if there is no group to reference
    if(this.group.key == null) return;

    cel.parent = this.group.key;
    
    this.celDB.add(cel)
    .then(key => { });
  }

  editCel(cel: Cel){
    let modal = this.modalCtrl.create(CelulaModalPage, {data: cel });
    modal.present();
  }

}
