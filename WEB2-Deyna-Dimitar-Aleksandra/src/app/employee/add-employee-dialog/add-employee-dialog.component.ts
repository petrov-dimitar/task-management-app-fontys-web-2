import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from 'src/app/interfaces/employee';
import { Task } from 'src/app/interfaces/task';
import { Department } from 'src/app/interfaces/department';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentsService } from 'src/app/services/departments.service';

@Component({
  selector: 'app-add-employee-dialog',
  templateUrl: './add-employee-dialog.component.html',
  styleUrls: ['./add-employee-dialog.component.css']
})
export class AddEmployeeDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddEmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService, public dialog: MatDialog) { }
  newId: string;
  newName: string;
  newAge: number;
  newCity: string;
  departmentId: number;
  employees: Employee[];
  selectedEmployee: Employee;
  tasks: Task[];
  departmentsToChoose: Department[];
  selectedDepartment: Department;
  ngOnInit(): void {
    this.getTasks();
    this.getEmployee();
    this.getDepartments();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  getEmployee(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
  }
  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departmentsToChoose = departments);
  }
    addEmployee() {
    this.employees.push(new Employee(this.newId, this.newName, this.newCity, this.newAge, this.selectedDepartment))
  }

}
