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
  newID: number;
  newDepartmentName: string;
  newDepartmentBuilding: string;
  tasks: Task[];
  departments: Department[];
  selectedDepartment: Department;
  employees: Employee[];
  selectedEmployees: number[];

  ngOnInit(): void {
    this.getDepartments();
    this.getEmployee();
    this.departmentService.getDepartmentsFromServer().subscribe(res => console.log(res));
  }

  getEmployee(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
  }

  addDepartment() {
    this.departments.push(new Department(this.newDepartmentName, this.newDepartmentBuilding));
  }

  selectDepartment(department) {
    this.selectedDepartment = department;

  }

  getDepartments(): void {
    this.departmentService.getDepartmentsFromServer()
      .subscribe(departments => this.departments = departments);
  }
  
  deleteDepartment(department: Department) {
    this.departmentService.deleteDepartmentWithId(department.id).subscribe(res => {
      let index = this.departments.indexOf(department);
      this.departments.splice(index, 1);
    });
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
