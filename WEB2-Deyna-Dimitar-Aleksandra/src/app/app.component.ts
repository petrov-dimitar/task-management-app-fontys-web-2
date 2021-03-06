import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


import { map, startWith } from 'rxjs/operators';
import { TaskService } from './services/task.service';
import { EmployeeService } from './services/employee.service';
import { DepartmentsService } from './services/departments.service';
import { Task } from './interfaces/task';
import { Employee } from './interfaces/employee';
import { Department } from './interfaces/department';
import { ManagementEntity } from './interfaces/managementEntity';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WEB2-Deyna-Dimitar-Aleksandra';
  @ViewChild('drawer') drawer: any;
  constructor(public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService, private breakpointObserver: BreakpointObserver) { }

  myControl = new FormControl();
  options: ManagementEntity[] = [];
  filteredOptions: Observable<ManagementEntity[]>;

  tasks: Task[];
  employees: Employee[];
  departments: Department[];

  stringTypeTask: string = 'task';
  stringTypeEmployee: string = 'employee';
  stringTypeDepartment: string = 'department';

  ngOnInit() {
    this.getTasks();
    this.getEmployees();
    this.getDepartments();
    this.tasks.filter(task => {
      this.options.push(new ManagementEntity(task.id, task.name, this.stringTypeTask));
    })
    this.employees.filter(employee => {
      this.options.push(new ManagementEntity(Number(employee.id), employee.first_name, this.stringTypeEmployee));
    })
    this.departments.filter(department => {
      this.options.push(new ManagementEntity(Number(department.id), department.name, this.stringTypeDepartment));
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
  private _filter(value: string): ManagementEntity[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }
  closeSideNav() {
    if (this.drawer._mode == 'over') {
      this.drawer.close();
    }
  }
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));
}
