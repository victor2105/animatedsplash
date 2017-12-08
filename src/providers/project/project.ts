import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Project } from '../../models/projeto';

/*
  Generated class for the ProjectProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProjectProvider {

  key: string;

  constructor() {
    console.log('Hello ProjectProvider Provider');
  }

}
