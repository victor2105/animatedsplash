import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider } '../../providers/project/project';

/**
 * Generated class for the NovoProjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-novo-projeto',
  templateUrl: 'novo-projeto.html',
})
export class NovoProjetoPage {

  name: string;
  template: boolean = false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private projectCtrl : ProjectProvider ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoProjetoPage');
  }

  save(name, template){
    this.projectCtrl.addProject(this.name, this.template)
  }

  cancel(){
    this.navCtrl.pop();
  }

}
