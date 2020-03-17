import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service'
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService) { }
  newId: string;
  newTask: string;
  newTaskDescription: string;
  newDeadlineDate: Date;
  tasks: Task[];
  selectedTask: Task;
  employees: Employee[];
  selectedDueDate: Date;
  selectedEmployee: Employee;
  departments: Department[];
  selectedDepartment: Department;


  ngOnInit() {
    this.getTasks();
    this.getEmployees();
    this.getDepartments();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getEmployees(): void {
    this.employeeService.getEmployee().subscribe(emp => this.employees = emp);
  }
  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(dep => this.departments = dep);
  }
  deleteTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  addTask() {
    this.tasks.push(new Task(this.newId, this.newTask, this.newTaskDescription, this.selectedDueDate, this.selectedEmployee, this.selectedDepartment));
  }

  selectTask(task) {
    this.selectedTask = task;
  }


}
