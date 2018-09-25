import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { CelListService } from '../../services/cel-list/cel-list.service';
import { Observable } from 'rxjs/Observable';
import { NewCelPage } from '../../pages/new-cel/new-cel';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { EditGroupPage } from '../../pages/edit-group/edit-group';
import { GroupListService } from '../../services/group-list/group-list.service';
import 'rxjs/add/operator/map';
import { updateDate } from '../../../node_modules/ionic-angular/umd/util/datetime-util';
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

  
  // @ViewChild (Content) content: Content;

  @Input() key: string = "-1";
  @Input() editar: boolean = false;
  @Input() group: Cel = new Cel();

  @Output() updateEvent = new EventEmitter();

  editarTitulo: boolean;

  public celList$: Observable<any[]>;

  constructor(
    private actionSheet: ActionSheetController,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    private groupDB: GroupListService,
    private celDB: CelListService) {

    }

  ngOnInit() {
    this.celList$ = this.celDB
    .getCelWithParent(this.group.key) // children of this.group
    .snapshotChanges()  // key and values
    .map(changes => {
      return changes.map(c => ({
        key: c.payload.key, ...c.payload.val()
      }))
    });
    this.celList$.subscribe(list => {
      this.calculate(list);
    });
  }


  newCel() {
    this.navCtrl.push(NewCelPage, { parent: this.group.key, cel: null });
  }

  editCel(cel) {
    this.navCtrl.push(NewCelPage, { parent: this.group.key, cel: cel })
      .then(() => {
        // this.content.resize();
      })
      .catch(() => {
        // this.content.resize();
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
            this.showConfirmation('Deseja realmente apagar este grupo?', () => {
              this.groupDB.remove(this.group)
              .then(() => {
              })
              .catch(() => {
        
              });
            });                     
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    }).present();
  }

  showConfirmation(message: string, yesAction) {
    let prompt = this.alertCtrl.create({
      title: 'Confirmação',
      message: message,
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
          }
        },
        {
          text: 'Sim',
          handler: data => {
            yesAction();
          }
        }
      ]
    });
    prompt.present();
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
            }).catch(() => {        
            });

          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    }).present();
  }

  editGroup() {
    this.navCtrl.push(EditGroupPage, { parent: this.group.parent, cel: this.group })
    .then(() => {
      // this.content.resize();
      this.updateEvent.emit(null);
    })
    .catch(() => {
      this.updateEvent.emit(null);
    });
  }

  calculate(list) {
    let sum: number = 0;
    
    list.forEach((value: Cel, index: number, array: Cel[]) => {
      sum = Number(sum) + Number(value.value);
    });

    this.group.value = sum;
    this.groupDB.update(this.group);
  }

}
