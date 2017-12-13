import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";


@Injectable()
export class CelListService {

    private listRef$ = this.db.list<Cel>
    ('cel-list');

    constructor(public db: AngularFireDatabase) {
    }

    gettList() {
        return this.listRef$;
    }

    add(cel: Cel) {
        return this.listRef$.push(cel);
    }

    edit(cel: Cel) {
        return this.listRef$.update(cel.key, cel);
    }

    getCelWithParent(parent){
        return this.db.list('cel-list', ref => ref.orderByChild('parent').equalTo(parent));
    }

}