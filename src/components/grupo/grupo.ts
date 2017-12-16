import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Grupo } from '../../models/grupo';
import { CelulaComponent } from '../celula/celula';
import { ModalController } from 'ionic-angular';
import { CelulaModalPage } from '../../pages/celula-modal/celula-modal';
import { Cel } from '../../models/cel';
import { CelListService } from '../../services/cel-list/cel-list.service';
import { Observable } from 'rxjs/Observable';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { NewCelPage } from '../../pages/new-cel/new-cel';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { EditGroupPage } from '../../pages/edit-group/edit-group';
import { GroupListService } from '../../services/group-list/group-list.service';

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
export class GrupoComponent implements OnChanges {

  @Input() key: string = "-1";
  @Input() editar: boolean = false;
  @Input() group: Cel = new Cel();

  editarTitulo: boolean;

  public celList$: Observable<Cel[]>;

  constructor(private modalCtrl: ModalController,
     private navCtrl: NavController,
     private groupDB: GroupListService,
    private celDB: CelListService) {  }

  ngOnChanges(changes: SimpleChanges): void {
    this.celList$ = this.celDB
      .getCelWithParent(this.group.key) // children of this.project
      .snapshotChanges()  // key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  newCel(){
    this.navCtrl.push(NewCelPage, {parent: this.group.key, cel: null});
  }

  editCel(cel) {
    this.navCtrl.push(NewCelPage, {parent: this.group.key, cel: cel})
    .then(() => {
    });
  }

  editGroup(){
    this.navCtrl.push(EditGroupPage, {parent: this.group.parent, cel: this.group})
  }

  calculate(group: Cel){
    let sum = 0;
    this.celList$.forEach((array : Cel[]) => {
      array.forEach( (value: Cel, index: number, array: Cel[]) => {
        sum = sum + value.value;
      } )
      return sum;
    }).then( () => {
      group.value = sum;
      
    });
  }

}
