import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee'
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService,  public dialog: MatDialog) {
  }
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
  panelOpenState = false; 
  // employees: string[] = ['Ivan', 'Jonh', 'Laura', 'Ricardo',] 



  // employees: string[] = ['Ivan', 'Jonh', 'Laura', 'Ricardo',]
  ngOnInit(): void {
    this.getTasks();
    this.getEmployee();
    this.getDepartments();

  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }
  getEmployee(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees); //return employyes - assign the "new" employee to the employee
  }
  deleteEmployee(employee: Employee) {
    let index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

  addEmployee() {
    this.employees.push(new Employee(this.newId, this.newName, this.newCity, this.newAge, this.selectedDepartment))
  }

  selectEmployee(employee) {
    this.selectedEmployee = employee;
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departmentsToChoose = departments);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '60vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
