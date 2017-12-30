import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";



@Injectable()
export class ProjectListService {

    private projectListRef$ = this.db.list<Cel>
    ( 'project-list' );

    constructor (private db: AngularFireDatabase) {
    }

    getProjectList () {
        return this.projectListRef$;
    }

    addProject(project: Cel) {
        return this.projectListRef$.push(project);
    }

    editProject(project: Cel) {
        return this.projectListRef$.update(project.key, project);
    }

    getUserProjects(userEmail){
        console.log(userEmail);
        if(userEmail == null) return this.projectListRef$;
        return this.db.list('project-list', ref => ref.orderByChild('parent').equalTo(userEmail));
    }

}