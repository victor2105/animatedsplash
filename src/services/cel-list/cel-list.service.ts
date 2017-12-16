import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";
import { group } from "@angular/core/src/animation/dsl";


@Injectable()
export class CelListService {

    calculate() {
        
    }

    private groupListRef$ = this.db.list<Cel>
        ('cel-list');

    constructor(public db: AngularFireDatabase) {
    }

    getList() {
        return this.groupListRef$;
    }

    add(group: Cel) {
        return this.groupListRef$.push(group);
    }

    edit(group: Cel) {
        return this.groupListRef$.update(group.key, group);
    }

    getCelWithParent(parent){
        if(parent == null) return this.groupListRef$;
        return this.db.list('cel-list', ref => ref.orderByChild('parent').equalTo(parent));
    }

}