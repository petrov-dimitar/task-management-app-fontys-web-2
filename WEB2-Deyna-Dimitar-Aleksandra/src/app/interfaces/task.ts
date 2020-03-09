export class Task {
    taskId: string;
    taskName: string;
    description: string;
    deadlineDate?: Date;

    constructor(id:string, taskName:string, description:string, deadlineDate:Date){
        this.taskId = id;
        this.taskName = taskName;
        this.description = description;
        this.deadlineDate = deadlineDate;

    }
}
/*
export const TASKS: Task[] = [
{id: '1', taskName: 'Sam', descriptionTask: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '2', taskName: 'Tim', descriptionTask: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '3', taskName: 'Ana', descriptionTask: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '4', taskName: 'Simon', descriptionTask: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '5', taskName: 'Peter', descriptionTask: 'some desc', deadlineDate: new Date(10/10/2020) }
]*/
