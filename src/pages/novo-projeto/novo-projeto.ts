import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectProvider } from '../../providers/project/project';
import { Cel } from '../../models/cel';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { GaleriaPage } from '../galeria/galeria';
import { AngularFireDatabase } from 'angularfire2/database';
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

  private projectListRef$ = this.db.list<Cel>
  ( 'group-list' );

  constructor (private db: AngularFireDatabase) {
  }

  getProjectList () {
      return this.projectListRef$;
  }

  addProject(project: Cel) {
      return this.projectListRef$.push(project);
  }

  editProject(project: Cel) {
      return this.projectListRef$.update(project.key, project);
  }

}
