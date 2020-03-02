import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  tasks: string[] = ['print', 'send email', 'finish week 2 assignments'];

  ngOnInit() {
  }

}
