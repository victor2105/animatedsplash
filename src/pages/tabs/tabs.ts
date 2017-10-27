import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { EntradaPage } from '../entrada/entrada';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = EntradaPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
