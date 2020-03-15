import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces/task';
import { TaskService } from '../services/task.service'
import { Employee } from '../interfaces/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService: TaskService, private employeeService: EmployeeService) { }
  newId: string;
  newTask: string;
  newTaskDescription: string;
  newDeadlineDate: Date;
  tasks: Task[];
  selectedTask: Task;
  employees: Employee[];
  selectedDueDate: Date;
  selectedEmployee: Employee;
  ngOnInit() {
    this.getTasks();
    this.getEmployees();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getEmployees(): void {
    this.employeeService.getEmployee().subscribe(emp => this.employees = emp);
  }
  deleteTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.tasks.push(new Task(this.newId, this.newTask, this.newTaskDescription, this.selectedDueDate, this.selectedEmployee));
  }

  selectTask(task) {
    this.selectedTask = task;
  }
}
