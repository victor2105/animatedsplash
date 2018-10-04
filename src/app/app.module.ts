import { NgModule, ErrorHandler} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GrupoComponent } from '../components/grupo/grupo';
import { CelulaComponent } from '../components/celula/celula';
import { EntradaProvider } from '../providers/entrada/entrada';
import { ProjectProvider } from '../providers/project/project';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { ProjectListService } from '../services/project-list/project-list.service';
import { ToastService } from '../services/toast/toast.service';
import { ProjectPage } from '../pages/project/project';
import { NovoProjetoPage } from '../pages/novo-projeto/novo-projeto';
import { GroupListService } from '../services/group-list/group-list.service';
import { CelListService } from '../services/cel-list/cel-list.service';
import { NewCelPage } from '../pages/new-cel/new-cel';
import { EditGroupPage } from '../pages/edit-group/edit-group';
import { IonicStorageModule } from '@ionic/storage';
import { LocalDatabaseProvider } from '../providers/local-database/local-database';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { GaleriaPageModule } from '../pages/galeria/galeria.module';
import { AdMobFree } from '@ionic-native/admob-free';

@NgModule({
  declarations: [
    GrupoComponent,
    CelulaComponent,
    
    MyApp,
    ProjectPage,
    NovoProjetoPage,
    NewCelPage,
    EditGroupPage,
  ],
  imports: [
    BrowserModule,
    GaleriaPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    LocalDatabaseProvider,
    AuthProvider,
    AdMobFree
  ]
})
export class AppModule {}
