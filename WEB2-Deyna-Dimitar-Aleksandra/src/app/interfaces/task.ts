export class Task {
    id: string;
    name: string;
    description: string;
    deadlineDate?: Date;

    constructor(id:string, name:string, description:string, deadlineDate:Date){
        this.id = id;
        this.name = name;
        this.description = description;
        this.deadlineDate = deadlineDate;

    }
}

export const TASKS: Task[] = [
{id: '1', name: 'Sam', description: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '2', name: 'Tim', description: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '3', name: 'Ana', description: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '4', name: 'Simon', description: 'some desc', deadlineDate: new Date(10/10/2020) },
{id: '5', name: 'Peter', description: 'some desc', deadlineDate: new Date(10/10/2020) }
]
