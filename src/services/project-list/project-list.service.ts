import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from 'rxjs/Observable';

import { Cel } from "../../models/cel";



@Injectable()
export class ProjectListService {

    projectList$: Observable<Cel[]>;

    private projectListRef$ = this.db.list<Cel>
        ('project-list');

    constructor(private db: AngularFireDatabase) {
        
        
    }

    loadUserProjects(email) {
        this.projectList$ = this.getProjects(email)
            .snapshotChanges()// key and values
            .map(changes => {
                return changes.map(c => ({
                    key: c.payload.key, ...c.payload.val()
                }))
            });
    }

    getObservable() {
        return this.projectList$;
    }

    getProjectList() {
        return this.projectListRef$;
    }

    addProject(project: Cel) {
        return this.projectListRef$.push(project);
    }

    editProject(project: Cel) {
        return this.projectListRef$.update(project.key, project);
    }

    getProjects(userEmail) {
        console.log(userEmail);
        if (userEmail == null) return this.projectListRef$;
        return this.db.list('project-list', ref => ref.orderByChild('parent').equalTo(userEmail));
    }

}