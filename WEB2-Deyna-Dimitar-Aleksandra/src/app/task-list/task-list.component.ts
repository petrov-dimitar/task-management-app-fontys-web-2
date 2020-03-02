import { Component, OnInit } from '@angular/core';
import { TASKS, Task} from '../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks:Task[] = TASKS;

  ngOnInit() {
  }

}
