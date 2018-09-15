import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { CelListService } from '../../services/cel-list/cel-list.service';

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

  cel : Cel;

  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private celDB: CelListService) {
      this.cel = this.navParams.data;
  }

  ionViewDidLoad() {
  }



}
