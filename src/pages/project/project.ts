import { Component, ViewChild, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Content } from 'ionic-angular';
import { Cel } from '../../models/cel';
import { ProjectListService } from '../../services/project-list/project-list.service';
import { ToastService } from '../../services/toast/toast.service';
import { Observable } from 'rxjs/Observable';
import { GroupListService } from '../../services/group-list/group-list.service';
import 'rxjs/add/operator/map';
import { Subscription } from '../../../node_modules/rxjs/internal/Subscription';

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
export class ProjectPage implements OnDestroy {
  
  project: Cel;  
  groupListSub: Subscription;

  groupList: any[] = []; 

  @ViewChild (Content) content: Content;

  groupList$ : Observable<any[]>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheet: ActionSheetController,
    public projectDB: ProjectListService,
    private groupDB: GroupListService,
    private toast: ToastService) {
      this.project = this.navParams.get('project');
      
      this.groupList$ = this.groupDB
      .getCelWithParent(this.project.key) // children of this.project
      .snapshotChanges()// key and values
      .map(changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });

      this.groupListSub = this.groupList$.subscribe(list => {
        console.log(list);
        this.groupList = list;
      });

  }
  ngOnDestroy(): void {
    if(this.groupListSub) this.groupListSub.unsubscribe();
  }
  ionViewWillEnter() {
    this.content.resize();
  }

  saveProject(project: Cel) {
    this.projectDB.editProject(project)
      .then(() => {
        this.toast.show(`${project.name} saved!`);
        this.navCtrl.pop();
      }, err => {
      });
  }

  newGroup(name){
    let group = new Cel();
    group.name = name;
    group.value = 0;
    // Do not save if there is no project to reference
    if(this.project.key == null) return;

    group.parent = this.project.key;
    
    this.groupDB.add(group)
    .then(() => {
    }, () => {
      });
  }

  background() {
    if(this.project.background){
      return this.project.background;
    }else{
      return 'primary';
    }
  }

  updateEvent($event) {
    console.log("change");
  }
}
