 import { Bug } from "../classes/bug.js";

// console.log(bugs);

export class bugsDataService{
    constructor(){
        this.bugs = []
    }

    loadData(bugs){
        for(let data of bugs){
            let bug = this.loadBugObject(data);
            this.bugs.push(bug)
        }
    }
    loadBugObject(bug){
        let b = new Bug();
        b._id = bug._id;
        b.status = bug.status;
        b.priority = bug.priority;
        b.isActive = bug.isActive;
        b.picture = bug.picture;
        b.assignTo = bug.assignTo;
        b.reporter = bug.reporter;
        b.description = bug.description;
        b.registered = bug.registered;
        return b;
    }
}