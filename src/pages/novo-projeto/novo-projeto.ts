import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
import { Cel } from '../../models/cel';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { GaleriaPage } from '../galeria/galeria';
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

  project: Cel;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private projects: ProjectListService,
    private toast: ToastService) {
      this.project = new Cel();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoProjetoPage');
  }

  addProject(project: Cel) {
    this.projects.addProject(project)
      .then(ref => {
        this.toast.show(`${project.name} saved!`);
        this.navCtrl.pop();
      });
  }

}
