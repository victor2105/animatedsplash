import { Component, ViewChild, Input } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { GrupoComponent } from '../../components/grupo/grupo';
import { Grupo } from '../../models/grupo';
import { EntradaProvider } from '../../providers/entrada/entrada';
import { GruposProvider } from '../../providers/grupos/grupos';

@Component({
  selector: 'page-home',
  templateUrl: 'entrada.html'
})
export class EntradaPage{
  
  @Input()
  center: boolean;

  grupos: Grupo[];



  @ViewChild(Slides) slides: Slides;

  goToSlide() {
  }

  
  constructor(public navCtrl: NavController, private grupoCtrl: GruposProvider) {
    this.center = false;
    this.grupos = this.grupoCtrl.getGrupos();
    this.grupos = this.grupoCtrl.addGrupo(this.grupos);
  }

  addGrupo(){
    this.grupos = this.grupoCtrl.addGrupo(this.grupos);
    this.slides.slideTo(this.grupos.length, 500);   
  }

}
