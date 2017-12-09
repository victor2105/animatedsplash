import { Component, ViewChild, Input } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { GrupoComponent } from '../../components/grupo/grupo';
import { Grupo } from '../../models/grupo';
import { EntradaProvider } from '../../providers/entrada/entrada';
import { GruposProvider } from '../../providers/grupos/grupos';
import { Observable } from 'rxjs/Observable';
import { Cel } from '../../models/cel';

@Component({
  selector: 'esquema-page',
  templateUrl: 'esquema.html'
})
export class EsquemaPage{
  
  @Input()
  center: boolean;
  
  editar: boolean;
  
  grupos: Observable<Cel[]>;

  @ViewChild(Slides) slides: Slides;

  project : Cel = {
    name: 'novo_group',
    value: 0,
    function: 'sum all from me',
    parent: '',
    check: false
    
  };

  goToSlide() {
  }

  
  constructor(public navCtrl: NavController, private groupCtrl: GruposProvider) {
    this.center = false;
    this.grupos = this.groupCtrl.getGroupList().valueChanges();
  }

  addGrupo(project: Cel){
    this.groupCtrl.addGroup(project);
  }

}
