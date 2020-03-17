import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  tasks: Task[] = [
    { id: '1', name: 'Send mail', description: 'A mail should be send to the director.', deadlineDate: new Date("2019-01-16"), assignedEmployee: { id: "2", name: "David" }, assignedDepartment: { id: "1", name: 'Human Resources' } },

  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
