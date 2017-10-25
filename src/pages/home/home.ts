import { Component, ViewChild, Input } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  
  @Input()
  center: boolean;

  @ViewChild(Slides) slides: Slides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  
  constructor(public navCtrl: NavController) {
    this.center = false;
  }


}
