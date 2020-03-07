import { Task } from './task';

export class Department {
    id: string;
    depName: string;
    description?: string;
    tasks?: Task[];


    constructor(id: string, name: string, description?: string, tasks?: Task[]) {
        this.id = id;
        this.depName = name;
        this.description = description;
        this.tasks = tasks;

    }
}