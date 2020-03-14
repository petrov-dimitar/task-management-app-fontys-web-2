import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  tasks: Task[] = [
    {taskId: '1', taskName: 'Send mail', description: 'A mail should be send to the director.'},
    {taskId: '2', taskName: 'Make a report', description: 'A report needs to be made.'} 
];

  getTasks(): Observable<Task[]>{
  return of(this.tasks);
}
}
