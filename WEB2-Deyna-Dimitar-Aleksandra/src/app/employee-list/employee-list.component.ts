import { Component, OnInit} from '@angular/core';
import {Employee} from '../interfaces/employee'

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { 
  }
  newId: string;
  newName: string;
  newAge: number;
  newCity: string;
  departmentId: number;
  employees: Employee[] = [{id: 'TestId', name: 'Test Employee', age: 21, city: 'Test City', departmentId: '1'}];
  selectedEmployee: Employee;

  // employees: string[] = ['Ivan', 'Jonh', 'Laura', 'Ricardo',] 
  ngOnInit(): void {

  }

  deleteEmployee(employee: Employee){
    let index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

  addEmployee(){
    this.employees.push(new Employee(this.newId, this.newName, this.newCity, this.newAge))
  }

  selectEmployee(employee) {
    this.selectedEmployee = employee;
  }

}
