import { bugsDataService } from "./services/bugs-data-service.js";
import { bugs } from "./services/bugs-database.js";

let dataService = new bugsDataService();
dataService.loadData(bugs)

// console.log(dataService.bugs);
for(let bug of dataService.bugs){
    console.log(bug.status)
}