import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


import { map, startWith } from 'rxjs/operators';
import { TaskService } from './services/task.service';
import { EmployeeService } from './services/employee.service';
import { DepartmentsService } from './services/departments.service';
import { Task } from './interfaces/task';
import { Employee } from './interfaces/employee';
import { Department } from './interfaces/department';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WEB2-Deyna-Dimitar-Aleksandra';

  constructor(public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService) { }

  myControl = new FormControl();
  options: Task[] = [];
  filteredOptions: Observable<Task[]>;

  tasks: Task[];
  employees: Employee[];
  departments: Department[];

  ngOnInit() {
    this.getTasks();
    this.getEmployees();
    this.getDepartments();
    this.tasks.filter(task => {
      this.options.push(task);
    })

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
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
  private _filter(value: string): Task[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
}
