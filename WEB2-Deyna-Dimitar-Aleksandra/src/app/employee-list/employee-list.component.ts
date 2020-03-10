import { Component, OnInit} from '@angular/core';
import {Employee} from '../interfaces/employee'
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private taskService: TaskService) { 
  }
  newId: string;
  newName: string;
  newAge: number;
  newCity: string;
  departmentId: number;
  employees: Employee[] = [{id: 'TestId', name: 'Test Employee', age: 21, city: 'Test City', departmentId: '1'}];
  selectedEmployee: Employee;
  tasks: Task[];

  // employees: string[] = ['Ivan', 'Jonh', 'Laura', 'Ricardo',] 
  ngOnInit(): void {
  this.getTasks();
  }
  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
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
