import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";


@Injectable()
export class GroupListService {

    private groupListRef$ = this.db.list<Cel>
        ('group-list');

    constructor(public db: AngularFireDatabase) {
    }

    gettList() {
        return this.groupListRef$;
    }

    add(group: Cel) {
        return this.groupListRef$.push(group);
    }

    update(group: Cel) {
        return this.groupListRef$.update(group.key, group);
    }

    getCelWithParent(parent) {
        return this.db.list('group-list', ref => ref.orderByChild('parent').equalTo(parent));
    }

    remove(group: Cel){
        return this.groupListRef$.remove(group.key);
    }


}