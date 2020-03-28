import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';
import * as moment from 'moment';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Config } from 'protractor';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
}

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  constructor(public httpClient: HttpClient) { }
  url = "http://i875395.hera.fhict.nl/api/3375471/task";
  tasks: Task[] = [
    // { id: "1", name: 'Send mail', description: 'A mail should be send to the director.', start: moment().startOf('day'), end: moment().add(5, 'days').endOf('day'), assignedEmployee: { id: "2", first_name: "David" }, assignedDepartment: { id: "1", name: 'Human Resources' }, sectionId: 1 },

  ];


  getTasksSync() {
    this.httpClient.get('http://i875395.hera.fhict.nl/api/3375471/task').subscribe((res) => {
      console.log(res);
    });
  }

  getTasksFromServer(): Observable<Task[]> {

    return this.httpClient.get<Task[]>(this.url);
  }

  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }

  addTask(task: Task) {
    this.tasks.push(new Task(task.id, task.name, task.description, task.start, task.end, task.assignedEmployee, task.assignedDepartment, 4))
  }

  deleteTaskWithId(id: number): Observable<{}> {
    const url = `${this.url}?id=${id}`;
    return this.httpClient.delete(url)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }
  addTaskToServer(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.url,
      {
        "department_id": "25",
        "name": `${task.name}`,
        "description": `${task.description}`,
        "due_date": `${task.due_date}`
      }, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', task))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
