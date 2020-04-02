import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { DepartmentsService } from '../services/departments.service';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interfaces/employee';
import { Department } from '../interfaces/department';
import { Task } from '../interfaces/task';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../task/add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[];
  employees: Employee[];
  departments: Department[];
  constructor(private employeeService: EmployeeService, private departmentService: DepartmentsService, private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTasks();
    this.getEmployee();
    this.getDepartments();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  };
  getEmployee(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees); //return employyes - assign the "new" employee to the employee
  };
  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  };
  openDialog(): void {

    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '60vw',
      data: { name: 'testData' }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.taskService.getTasksFromServer().subscribe(tasks => {
        this.tasks = tasks;
        console.log(tasks);
      })

    });
  }
}
