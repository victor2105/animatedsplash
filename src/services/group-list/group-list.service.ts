import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";


@Injectable()
export class GroupListService {

    private groupListRef$ = this.db.list<Cel>
        ('group-list');

    constructor(private db: AngularFireDatabase) {
    }

    gettList() {
        return this.groupListRef$;
    }

    add(group: Cel) {
        return this.groupListRef$.push(group);
    }

    edit(group: Cel) {
        return this.groupListRef$.update(group.key, group);
    }

}