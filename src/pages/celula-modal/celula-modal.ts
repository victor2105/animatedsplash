import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Celula } from '../../models/celula';

/**
 * Generated class for the CelulaModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-celula-modal',
  templateUrl: 'celula-modal.html',
})
export class CelulaModalPage {

  celula : Celula;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.celula = this.navParams.data;
      console.log(this.celula.nome);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CelulaModalPage');
  }


  dismiss(){
    this.viewCtrl.dismiss();
  }

}
