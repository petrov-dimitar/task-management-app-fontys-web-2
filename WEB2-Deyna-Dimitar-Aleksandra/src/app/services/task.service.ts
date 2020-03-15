import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor() { }

  tasks: Task[] = [
    { id: '1', name: 'Send mail', description: 'A mail should be send to the director.' },
    { id: '2', name: 'Make a report', description: 'A report needs to be made.' }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
}
