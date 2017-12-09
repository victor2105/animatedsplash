import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Grupo } from '../../models/grupo';

import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";
import { AngularFireList } from 'angularfire2/database/interfaces';

/*
  Generated class for the GruposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GruposProvider {
  private groupListRef$: AngularFireList<Cel>;

  project: Cel;

  constructor(private db : AngularFireDatabase) {
  }

  
  selectProject(key: Cel){
      this.project = key;
      let ref = this.project+".children";
      console.log(ref);
      this.groupListRef$ = this.db.list<Cel>(ref);
  }

  getGroupList(){
    return this.groupListRef$;
  }

  addGroup(group : Cel) {
    return this.groupListRef$.push(group);
  }

}
