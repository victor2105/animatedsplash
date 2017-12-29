import { Component } from '@angular/core';
import { Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GaleriaPage } from '../pages/galeria/galeria';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    modalCtrl: ModalController,
    afAuth: AngularFireAuth) {

      const authObserver = afAuth.authState.subscribe( user => {
        if (user) {
          this.rootPage = GaleriaPage;
          authObserver.unsubscribe();
        } else {
          this.rootPage = 'LoginPage';
          authObserver.unsubscribe();
        }
      });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
