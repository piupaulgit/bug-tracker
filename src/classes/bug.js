export class Bug{
    constructor(_id, status, priority, isActive, picture, assignTo, reporter, description, registered){
        this._id = _id;
        this.status = status;
        this.priority = priority;
        this.isActive = isActive;
        this.picture = picture;
        this.assignTo = assignTo;
        this.reporter = reporter;
        this.description = description;
        this.registered = registered;
    }
}