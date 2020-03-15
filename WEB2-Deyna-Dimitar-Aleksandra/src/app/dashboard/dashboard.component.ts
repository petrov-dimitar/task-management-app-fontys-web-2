import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { DepartmentsService } from '../services/departments.service';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../interfaces/employee';
import { Department } from '../interfaces/department';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[];
  employees: Employee[];
  departments: Department[];
  constructor(private employeeService: EmployeeService, private departmentService: DepartmentsService, private taskService: TaskService) { }

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
}
