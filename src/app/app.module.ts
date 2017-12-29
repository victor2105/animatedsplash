import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GrupoComponent } from '../components/grupo/grupo';
import { CelulaComponent } from '../components/celula/celula';
import { CelulaModalPage } from '../pages/celula-modal/celula-modal';
import { EntradaProvider } from '../providers/entrada/entrada';
import { ProjectProvider } from '../providers/project/project';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { ProjectListService } from '../services/project-list/project-list.service';
import { ToastService } from '../services/toast/toast.service';
import { GaleriaPage } from '../pages/galeria/galeria';
import { ProjectPage } from '../pages/project/project';
import { NovoProjetoPage } from '../pages/novo-projeto/novo-projeto';
import { GroupListService } from '../services/group-list/group-list.service';
import { CelListService } from '../services/cel-list/cel-list.service';
import { NewCelPage } from '../pages/new-cel/new-cel';
import { EditGroupPage } from '../pages/edit-group/edit-group';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    GrupoComponent,
    CelulaComponent,
    
    MyApp,
    GaleriaPage,
    ProjectPage,
    NovoProjetoPage,
    NewCelPage,
    EditGroupPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GaleriaPage,
    ProjectPage,
    NovoProjetoPage,
    NewCelPage,
    EditGroupPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntradaProvider,
    ProjectProvider,
    ProjectListService,
    GroupListService,
    CelListService,
    ToastService,
    AuthProvider
  ]
})
export class AppModule {}
