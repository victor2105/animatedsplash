import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { EntradaPage } from '../pages/entrada/entrada';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage = EntradaPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      //let splash = modalCtrl.create(SplashPage);
      //splash.present();
    });
  }
}
