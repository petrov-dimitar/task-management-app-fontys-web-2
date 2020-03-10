import { Component, OnInit} from '@angular/core';
import {Employee} from '../interfaces/employee'
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private taskService: TaskService, private employeeService: EmployeeService) { 
  }
  newId: string;
  newName: string;
  newAge: number;
  newCity: string;
  departmentId: number;
  employees: Employee[];
  selectedEmployee: Employee;
  tasks: Task[];

  // employees: string[] = ['Ivan', 'Jonh', 'Laura', 'Ricardo',] 
  ngOnInit(): void {
  this.getTasks();
  this.getEmployee();
  }
  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
   }
   getEmployee(): void{
     this.employeeService.getEmployee().subscribe(employees => this.employees = employees); //return employyes - assign the "new" employee to the employee
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
