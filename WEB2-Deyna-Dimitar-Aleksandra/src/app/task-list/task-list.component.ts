import { Component, OnInit } from '@angular/core';
import { Task} from '../interfaces/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }
  newId: string;
  newTask: string;
  newTaskDescription: string;
  newDeadlineDate: Date;
  tasks: Task[] = [{taskId: '1', taskName: 'Send mail', description: 'A mail should be send to the director.'}];
  selectedTask: Task;

  ngOnInit() {
  }

  deleteTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.tasks.push(new Task(this.newId, this.newTask, this.newTaskDescription, this.newDeadlineDate));
  }

  selectTask(task) {
   this.selectedTask = task;
  }
}
