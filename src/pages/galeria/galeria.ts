import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Project } from '../../models/projeto';
import { ProjectProvider } from '../../providers/project/project';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { Cel } from '../../models/cel';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { ProjectPage } from '../project/project';
import { NovoProjetoPage } from '../novo-projeto/novo-projeto';
/**
 * Generated class for the GaleriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'galeria',
  templateUrl: 'galeria.html',
})
export class GaleriaPage {

  projectList$ : Observable<Cel[]> ;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private projectListService : ProjectListService) {
      this.projectList$ = this.projectListService
      .getProjectList() // DB LIST 
      .snapshotChanges()// key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });
  }

  newProject(){
    this.navCtrl.push(NovoProjetoPage);
  }

  editProject(project) {
    this.navCtrl.push(ProjectPage, {project: project});
  }

}
