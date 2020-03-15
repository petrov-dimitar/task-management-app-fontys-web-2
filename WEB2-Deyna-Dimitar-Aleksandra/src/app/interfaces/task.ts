import { Employee } from './employee';
import { Department } from './department';

export class Task {
    id: string;
    name: string;
    description: string;
    deadlineDate?: Date;
    assignedEmployee?: Employee;
    assignedDepartment?: Department;

    constructor(id: string, taskName: string, description: string, deadlineDate: Date, assignedEmployee?: Employee, assignedDepartment?: Department) {
        this.id = id;
        this.name = taskName;
        this.description = description;
        this.deadlineDate = deadlineDate;
        this.assignedEmployee = assignedEmployee;
        this.assignedDepartment = assignedDepartment;
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