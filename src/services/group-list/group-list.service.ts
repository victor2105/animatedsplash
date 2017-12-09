import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";



@Injectable()
export class GroupListService {

    groupListRef$ = this.db.list( 'group-list' );
  
    constructor (private db: AngularFireDatabase) {
    }

    getProjectList () {
        return this.groupListRef$;
    }

    addGroup(name, value, func) {
        return this.groupListRef$.push(  {
                name: name,
                value: value,
                func: func,
                cels: [],
            } );
    }

}