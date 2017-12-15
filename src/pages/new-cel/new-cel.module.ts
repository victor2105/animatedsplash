import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewCelPage } from './new-cel';


@NgModule({
  declarations: [
    NewCelPage,
  ],
  imports: [
    IonicPageModule.forChild(NewCelPage),
  ],
})
export class NewCelPageModule {}
