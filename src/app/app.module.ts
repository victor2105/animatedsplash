import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GrupoComponent } from '../components/grupo/grupo';
import { CelulaComponent } from '../components/celula/celula';
import { GruposProvider } from '../providers/grupos/grupos';
import { CelulaModalPage } from '../pages/celula-modal/celula-modal';
import { EntradaProvider } from '../providers/entrada/entrada';
import { EsquemaPage } from '../pages/esquema/esquema';
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

@NgModule({
  declarations: [
    MyApp,
    GrupoComponent,
    CelulaComponent,
    GaleriaPage,
    ProjectPage,
    NovoProjetoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GaleriaPage,
    ProjectPage,
    NovoProjetoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntradaProvider,
    GruposProvider,
    ProjectProvider,
    ProjectListService,
    GroupListService,
    ToastService 
  ]
})
export class AppModule {}
