import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interfaces/employee'
import { TaskService } from '../../services/task.service';
import { Task } from '../../interfaces/task';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeDialogComponent } from '../add-employee-dialog/add-employee-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService, public dialog: MatDialog, private _snackBar: MatSnackBar) {
  }
  newId: string;
  newName: string;
  newAge: number;
  newCity: string;
  departmentId: number;
  employees: Employee[];
  selectedEmployee: Employee;
  tasks: Task[];
  departments: Department[];
  selectedDepartment: Department;
  panelOpenState = false;
  searchValue: string = "";

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
  searchEmployee(): void {
    if (this.searchValue !== "" && this.searchValue.length > 1) {
      let returnArray: Employee[] = [];
      this.employees.filter(emp => {
        if (emp.first_name.match(this.searchValue)) {
          returnArray.push(emp)
        }

      })
      this.employees = returnArray
      console.log(this.employees);
    }
    else {
      this.getEmployee();
    }


  }
  getEmployee(): void {
    //this.employeeService.getEmployee().subscribe(employees => this.employees = employees); //return employyes - assign the "new" employee to the employee
    this.employeeService.getEmployeesFromServer().subscribe(employees => this.employees = employees);
  }
  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployeeWithId(employee.id).subscribe(res => console.log(res));
    let index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

  addEmployee() {
    this.employees.push(new Employee(this.newId, this.newName, this.newCity, this.newAge))
  }

  selectEmployee(employee) {
    this.selectedEmployee = employee;
  }

  getDepartments(): void {
    this.departmentService.getDepartmentsFromServer()
      .subscribe(departments => this.departments = departments);
  }

  updateEmployee(employee: Employee) {

    this.employeeService.UpdateEmployeeToServer(this.selectedEmployee).subscribe(res => {
      console.log(res);
      this.employeeService.getEmployeesFromServer().subscribe(employees => { this.employees = employees });
      this._snackBar.open("Successful Update!", "Close");
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddEmployeeDialogComponent, {
      width: '60vw'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.employeeService.getEmployeesFromServer().subscribe(emps => {
        this.employees = emps;
      })
    });
  }


}
