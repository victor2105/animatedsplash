import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Project } from '../../models/projeto';
import { ProjectProvider } from '../../providers/project/project';

/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  projects: Project[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public projetoCtrl: ProjectProvider) {
    this.projects = this.projetoCtrl.projects;
  }

  public novoProjeto(){
    this.navCtrl.push('NovoProjetoPage', {});
    this.projects = this.projetoCtrl.projects;
  }

  public openProject(){
    this.navCtrl.push('EsquemaPage', {});
  }

}
