import { Component, ViewChild, Input } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { GrupoComponent } from '../../components/grupo/grupo';
import { CelulaComponent} from '../../components/celula/celula';
import { Grupo } from '../../models/grupo';
import { Celula } from '../../models/celula';

@Component({
  selector: 'page-home',
  templateUrl: 'entrada.html'
})
export class EntradaPage{
  
  @Input()
  center: boolean;

  grupo: Grupo;



  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  
  constructor(public navCtrl: NavController) {
    this.center = false;

    let celula = new Celula();
    celula.nome = "Salario";
    celula.valor = 1000;

    this.grupo = new Grupo();
    this.grupo.nome = "Entradas Fixas";
    this.grupo.celulas = [
      celula,
      celula
    ];
  }


}
