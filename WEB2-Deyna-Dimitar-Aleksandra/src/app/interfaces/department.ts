import { Task } from './task';
import { Employee } from './employee';

export class Department {
    id: string;
    name: string;
    description?: string;
    tasks?: Task[];
    employees?: Employee[]


    constructor(id: string, name: string, description?: string, tasks?: Task[], employees?: Employee[]) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.tasks = tasks;
        this.employees = employees;

    }
}