import { Task } from './task';
import { Employee } from './employee';

export class Department {
    id: number;
    name: string;
    building?: string;
    tasks?: Task[];
    employees?: number[]


    constructor(name: string, building?: string) {
        this.name = name;
        this.building = building;
    }
}