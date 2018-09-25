import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../providers/auth/auth';
import { ProjectListService } from '../services/project-list/project-list.service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    projectCtrl: ProjectListService,
    authCtrl: AuthProvider,
    afAuth: AngularFireAuth) {

      const authObserver = afAuth.authState.subscribe( user => {
        if (user) {
          authCtrl.email = user.email;
          this.rootPage = 'GaleriaPage';
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
    })
    .catch();
  }
}
