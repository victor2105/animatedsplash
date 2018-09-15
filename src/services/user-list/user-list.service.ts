import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";



@Injectable()
export class UserListService {

    userListRef$ = this.db.list<Cel>( 'user-list' );
    selectedProjectKey: string;
    projectChildrenRef$;


    constructor (private db: AngularFireDatabase) {
    }

    getProjectList () {
        return this.userListRef$;
    }

    writeUserData(userId, name, email, imageUrl) {
     
    }

}