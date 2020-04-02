import { Employee } from './employee';
import { Department } from './department';

export class Task {
    id?: Number;
    name?: string;
    sectionId?: number;
    description?: string;
    start?: any;
    end?: any;
    assignedEmployee?: Employee;
    assignedDepartment?: Department;
    department_id?: Number;
    employees?: Number[];
    due_date?: any;

    constructor(department_id?: Number, taskName?: string, description?: string, deadlineDate?: any, start?: Date, assignedEmployee?: Employee, assignedDepartment?: Department, sectionId?: number) {

        this.name = taskName;
        this.description = description;
        this.start = start;
        this.due_date = deadlineDate;
        this.assignedEmployee = assignedEmployee;
        this.assignedDepartment = assignedDepartment;
        this.sectionId = sectionId;
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
