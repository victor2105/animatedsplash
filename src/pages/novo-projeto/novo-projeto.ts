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

  editMode = false;

  email: string;
  project: Cel;

  disableButton = false;

  colors = [
    { class: 'primary' },
    { class: 'secondary' },
    { class: 'danger' },
    { class: 'purple' },
    { class: 'light' },
    { class: 'dark' }
  ];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public authCtrl: AuthProvider,
    private projects: ProjectListService,
    private toast: ToastService) {

      this.project = this.navParams.get('project');

      if(!this.project){
        this.project = new Cel();
      }else{
        this.editMode = true;
      }
      this.email = authCtrl.getUserEmail();
  }

  ionViewDidLoad() {
  }

  finish(project: Cel) {
    project.parent = this.authCtrl.getUserEmail();
    if(this.editMode){
      this.saveProject(project);
    }else{
      this.addProject(project);
    }
  }

  saveProject(project: Cel) {
    this.projects.editProject(project)
    .then(ref => {
      this.toast.show(`${project.name} salvo!`);
      this.navCtrl.pop();
    }, err => {        
      this.toast.show(`Não foi possível salvar o projeto.`);
      this.navCtrl.pop();
    });
  }

  addProject(project: Cel) {
    this.projects.addProject(project)
    .then(ref => {
      this.toast.show(`${project.name} criado!`);
      this.navCtrl.pop();
    }, err => {
      this.toast.show(`Não foi possível criar o projeto.`);
      this.navCtrl.pop();
    });
  }

  setBackgroundColor(color: any) {
    console.log(color);
    this.project.background = color.class;
  }

  isSelected(color: any) {
    return color.class === this.project.background ? 'active' : '';
  }

}
