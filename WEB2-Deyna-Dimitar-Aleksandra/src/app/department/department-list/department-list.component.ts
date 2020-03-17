import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Department } from '../../interfaces/department';
import { Task } from '../../interfaces/task';
import { DepartmentsService } from '../../services/departments.service'
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { AddDepartmentDialogComponent } from '../add-department-dialog/add-department-dialog.component';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentsService, public dialog: MatDialog) { }
  newID: string;
  newDepartmentName: string;
  newDepartmentDescription: string;
  tasks: Task[];
  departments: Department[];
  selectedDepartment: Department;
  employees: Employee[];
  selectedEmployees: Employee[];

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployee();
  }

  getEmployee(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
  }

  addDepartment() {
    this.departments.push(new Department(this.newID, this.newDepartmentName, this.newDepartmentDescription, [] ,this.selectedEmployees));
  }

  selectDepartment(department) {
    this.selectedDepartment = department;

  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }
  
  deleteDepartment(task: Department) {
    let index = this.departments.indexOf(task);
    this.departments.splice(index, 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddDepartmentDialogComponent, {
      width: '60vw',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
