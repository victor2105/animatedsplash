import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { ToastService } from '../../services/toast/toast.service';
import { GaleriaPage } from '../galeria/galeria';
import { GroupListService } from '../../services/group-list/group-list.service';
/**
 * Generated class for the NovoProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-group',
  templateUrl: 'edit-group.html',
})
export class EditGroupPage {

  cel: Cel;
  parent: Cel;

  title: string;
  edit: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private cels: GroupListService,
    private toast: ToastService) {
    this.parent = this.navParams.get('parent');
    this.cel = this.navParams.get('cel');

    if (this.parent == null) {
      this.toast.show(`Erro!`);
      this.navCtrl.pop();
      return;
    }

    if (this.cel == null) {
      this.cel = new Cel();
      this.title = 'Novo grupo';
      this.edit = false;
      return;
    }

    this.edit = true;
    this.title = 'Editar Grupo';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditGroupPage');
  }

  save(cel: Cel) {
    if (!this.edit) {
      this.cels.add(cel)
        .then(ref => {
          this.showToast(cel);
        },() => {
        
        });
    } else {
      this.cels.update(cel)
        .then(ref => {
          this.showToast(cel);
        }).catch(() => {
        
        });
    }
  }

  showToast(cel) {
    this.toast.show(`${cel.name} salvo!`);
    this.navCtrl.pop();
  }

}
