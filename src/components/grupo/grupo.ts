import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActionSheetController, NavParams } from 'ionic-angular';
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
    private actionSheet: ActionSheetController,
    private navCtrl: NavController,
    private navParams: NavParams,
    private groupDB: GroupListService,
    private celDB: CelListService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.celList$ = this.celDB
      .getCelWithParent(this.group.key) // children of this.project
      .snapshotChanges()  // key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
    this.calculate();
  }

  newCel() {
    this.navCtrl.push(NewCelPage, { parent: this.group.key, cel: null, callback: this.mySumAllCallback });
  }

  editCel(cel) {
    this.navCtrl.push(NewCelPage, { parent: this.group.key, cel: cel, callback: this.mySumAllCallback })
      .then(() => {
      });
  }
  
  selectGroup() {
    this.actionSheet.create({
      title: `${this.group.name}`,
      buttons : [
        {
          text: 'Editar',
          handler: () => {
            this.editGroup();
          }
        },
        {
          text: 'Deletar',
          role: 'destructive',
          handler: () => {
            this.groupDB.remove(this.group)
            .then(() => {

            })            
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('The user has selected thte cancel button')
          }
        }
      ]
    }).present();
  }

  selectCel(cel: Cel) {
    this.actionSheet.create({
      title: `${cel.name}`,
      buttons : [
        {
          text: 'Editar',
          handler: () => {
            this.editCel(cel);
          }
        },
        {
          text: 'Deletar',
          role: 'destructive',
          handler: () => {
            // Delete the current cel
            this.celDB.remove(cel)
            .then(() => {
              this.mySumAllCallback();
            });

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('The user has selected thte cancel button')
          }
        }
      ]
    }).present();
  }

  editGroup() {
    this.navCtrl.push(EditGroupPage, { parent: this.group.parent, cel: this.group })
  }

  mySumAllCallback = () => {
    return new Promise((resolve, reject) => {
      let sum: number = 0;
      console.log("calculate");
      this.celList$.forEach((array: Cel[]) => {
        array.forEach((value: Cel, index: number, array: Cel[]) => {
          sum = Number(sum) + Number(value.value);
        })

        this.group.value = sum;
        this.groupDB.update(this.group);
        return sum;
      })
    });
  }

  calculate() {
    let sum: number = 0;
    console.log("calculate");
    this.celList$.forEach((array: Cel[]) => {
      array.forEach((value: Cel, index: number, array: Cel[]) => {
        sum = Number(sum) + Number(value.value);
      })

      this.group.value = sum;
      this.groupDB.update(this.group);
      return sum;
    })
  }

}
