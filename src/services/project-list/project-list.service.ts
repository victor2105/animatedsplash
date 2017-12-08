import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";



@Injectable()
export class ProjectListService {

    projectListRef$ = this.db.list<Cel>( 'project-list' );
    selectedProjectKey: string;
    projectChildrenRef$;


    constructor (private db: AngularFireDatabase) {
    }

    getProjectList () {
        return this.projectListRef$;
    }

    addProject(project : Cel) {
        return this.projectListRef$.push(project);
    }

}