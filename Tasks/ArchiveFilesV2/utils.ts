import tl = require("vsts-task-lib/task");

export function reportArchivePlan(files: string[], max: number=10) {
    var plan: string[] = [];
    plan.push(tl.loc('FoundNFiles', files.length));
    if (files.length > 0) {
        for (var i = 0; i < files.length; i++) {
            plan.push(tl.loc('ArchivingFile',files[i]));
            if (i >= max-1 && i < files.length-1) {
                plan.push('...');
                break;
            }
        }
    }
    return plan;
}