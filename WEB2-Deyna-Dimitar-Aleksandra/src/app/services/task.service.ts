import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  tasks: Task[] = [
    { id: "1", name: 'Send mail', description: 'A mail should be send to the director.', start: moment().startOf('day'), end: moment().add(5, 'days').endOf('day'), assignedEmployee: { id: "2", name: "David" }, assignedDepartment: { id: "1", name: 'Human Resources' }, sectionId: 1 },

  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task) {
    this.tasks.push(new Task(task.id, task.name, task.description, task.start, task.end, task.assignedEmployee, task.assignedDepartment, 4))
  }
}
