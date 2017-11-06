import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SplashPage } from '../pages/splash/splash';
import { EntradaPage } from '../pages/entrada/entrada';
import { DatabaseProvider } from '../providers/database/database';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, modalCtrl: ModalController, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      //let splash = modalCtrl.create(SplashPage);
      //splash.present();

      // Criando banco de dados
      dbProvider.createDatabase()
      .then(() => {
        this.openHomePage(splashScreen);
      })
      .catch();
      

    });

  }
  
  private openHomePage(splashScreen: SplashScreen){
    this.rootPage = EntradaPage;
    splashScreen.hide();
  }
}
