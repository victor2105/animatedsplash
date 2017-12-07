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

@NgModule({
  declarations: [
    MyApp,
    GrupoComponent,
    CelulaComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EntradaProvider,
    GruposProvider,
    ProjectProvider
  ]
})
export class AppModule {}
