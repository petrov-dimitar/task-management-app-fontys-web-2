import { Injectable, OnInit } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from '../interfaces/task';
import { Observable, of } from 'rxjs';
import { Item, NgxTimeSchedulerService } from 'ngx-time-scheduler';
import * as moment from 'moment';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  tasks: Task[] = [];
  items: Item[] = [];

  constructor(private taskService: TaskService, private service: NgxTimeSchedulerService) {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
      this.tasks.forEach(task => {
        this.items.push({
          id: Number(task.id),
          sectionID: Number(task.sectionId),
          name: task.name,
          start: task.start,
          end: task.end,
          classes: 'red'
        })
      })
    })
  }

  getItems(): Observable<Item[]> {
    return of(this.items);
  }
  addItem(item: Item) {
    // this.items.push(item);
    this.service.itemPush(item);
    console.log(this.items);
  }
}
