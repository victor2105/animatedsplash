import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { Grupo } from '../../models/grupo';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { Observable } from 'rxjs/Observable';
import { GroupListService } from '../../services/group-list/group-list.service';

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

  groupList$ : Observable<Cel[]> ;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public projectDB: ProjectListService,
    private groupDB: GroupListService,
    private toast: ToastService) {
      this.project = this.navParams.get('project');
      
      // db.list('/items', ref => ref.orderByChild('size').equalTo('large'))
      this.groupList$ = this.groupDB
      .getCelWithParent(this.project.key) // children of this.project
      .snapshotChanges()// key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

      //this.groupList$.subscribe();

  }

  ionViewDidLoad() {
  }

  saveProject(project: Cel) {
    this.projectDB.editProject(project)
      .then(() => {
        this.toast.show(`${project.name} saved!`);
        this.navCtrl.pop();
      })
  }

  newGroup(name){
    let group = new Cel();
    group.name = name;
    group.value = 0;
    // Do not save if there is no project to reference
    if(this.project.key == null) return;

    group.parent = this.project.key;
    
    this.groupDB.add(group)
    .then(key => {
      
    });
  }



}
