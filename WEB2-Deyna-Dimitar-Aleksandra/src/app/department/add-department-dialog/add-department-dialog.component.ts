import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/interfaces/task';
import { Department } from 'src/app/interfaces/department';
import { Employee } from 'src/app/interfaces/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-add-department-dialog',
  templateUrl: './add-department-dialog.component.html',
  styleUrls: ['./add-department-dialog.component.css']
})
export class AddDepartmentDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDepartmentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService, public dialog: MatDialog) { }
  

    onNoClick(): void {
      this.dialogRef.close();
    }
  
  ngOnInit(): void {
    this.getEmployee();
    this.getDepartments();
  }

  
  newDepartmentName: string;
  newDepartmentBuilding: string;
  tasks: Task[];
  departments: Department[];
  selectedDepartment: Department;
  employees: Employee[];
  selectedEmployees: number[];

  getEmployee(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
  }
  deleteDepartment(task: Department) {
    let index = this.departments.indexOf(task);
    this.departments.splice(index, 1);
  }

  addDepartment() {
    this.departmentService.addDepartmentToServer(new Department(this.newDepartmentName, this.newDepartmentBuilding)).subscribe(res => console.log(res));
    this.departments.push(new Department(this.newDepartmentName, this.newDepartmentBuilding));
    console.log(this.selectedEmployees);
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }

  selectDepartment(department) {
    this.selectedDepartment = department;
  }
}
