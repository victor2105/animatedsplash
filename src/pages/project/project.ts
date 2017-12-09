import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { Grupo } from '../../models/grupo';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the ProjectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {
  project: Cel;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public projectDB: ProjectListService,
    private toast: ToastService) {
  }

  ionViewDidLoad() {
    this.project = this.navParams.get('project');
  }

  saveProject(project: Cel) {
    this.projectDB.editProject(project)
      .then(() => {
        this.toast.show(`${project.name} saved!`);
        this.navCtrl.pop();
      })
  }

}
