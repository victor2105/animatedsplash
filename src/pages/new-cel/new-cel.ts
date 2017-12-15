import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { ToastService } from '../../services/toast/toast.service';
import { GaleriaPage } from '../galeria/galeria';
import { CelListService } from '../../services/cel-list/cel-list.service';
/**
 * Generated class for the NovoProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-cel',
  templateUrl: 'new-cel.html',
})
export class NewCelPage {

  cel: Cel;
  parent: Cel;

  title: string;
  edit: boolean;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private cels: CelListService,
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
      this.title = 'Nova Célula';
      this.edit = false;
      return;
    }

    this.edit = true;
    this.title = 'Editar Célula';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewCelPage');
  }

  save(cel: Cel) {
    if (!this.edit) {
      this.cels.add(cel)
        .then(ref => {
          this.showToast(cel);
        });
    } else {
      this.cels.edit(cel)
        .then(ref => {
          this.showToast(cel);
        });
    }
  }

  showToast(cel) {

    this.toast.show(`${cel.name} saved!`);
    this.navCtrl.pop();
  }

}
