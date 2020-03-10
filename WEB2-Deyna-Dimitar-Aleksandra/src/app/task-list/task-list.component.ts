import { Component, OnInit } from '@angular/core';
import { Task} from '../interfaces/task';
import {TaskService} from '../services/task.service'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService: TaskService) { }
  newId: string;
  newTask: string;
  newTaskDescription: string;
  newDeadlineDate: Date;
  tasks: Task[];
  selectedTask: Task;

  ngOnInit() {
    this.getTasks();
  }
  getTasks(): void{
   this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
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
