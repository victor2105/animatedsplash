import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
import { Cel } from '../../models/cel';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { GaleriaPage } from '../galeria/galeria';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-novo-projeto',
  templateUrl: 'novo-projeto.html',
})
export class NovoProjetoPage {

  email: string;
  project: Cel;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authCtrl: AuthProvider,
    private projects: ProjectListService,
    private toast: ToastService) {
      this.project = new Cel();

      this.email = authCtrl.getUserEmail();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NovoProjetoPage');
  }

  addProject(project: Cel) {
    project.parent = this.authCtrl.getUserEmail();
    this.projects.addProject(project)
      .then(ref => {
        this.toast.show(`${project.name} saved!`);
        this.navCtrl.pop();
      });
  }

}
