import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, List } from 'ionic-angular';
import { Project } from '../../models/projeto';
import { ProjectProvider } from '../../providers/project/project';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { Cel } from '../../models/cel';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { GruposProvider } from '../../providers/grupos/grupos';
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

  projects : Observable<Cel[]> = this.projectListService.getProjectList().valueChanges();
  
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private groupCtrl: GruposProvider,
    private projectListService : ProjectListService) {
  }

  select(project: Cel){   
    this.groupCtrl.selectProject(project.key);
    this.navCtrl.setRoot("EsquemaPage");
  }

}
