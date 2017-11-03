import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CelulaModalPage } from './celula-modal';

@NgModule({
  declarations: [
    CelulaModalPage,
  ],
  imports: [
    IonicPageModule.forChild(CelulaModalPage),
  ],
})
export class CelulaModalPageModule {}
