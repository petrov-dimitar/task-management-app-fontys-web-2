import { Component, OnInit } from '@angular/core';
import { Department } from '../interfaces/department';
import { Task } from '../interfaces/task';
import { Employee } from '../interfaces/employee';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  newID: string;
  newDepartmentName: string;
  newDepartmentDescription: string;
  tasks: Task[];
  departments: Department[] = [{ id: '1', depName: 'Human resources', description: 'This department deals with employees inside the organization' }];
  selectedDepartment: Department;
  employees: Employee[];

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void{
    this.employeeService.getEmployee().subscribe(employees => this.employees = employees);
  }
  deleteDepartment(task: Department) {
    let index = this.departments.indexOf(task);
    this.departments.splice(index, 1);
  }

  addDepartment() {
    this.departments.push(new Department(this.newID, this.newDepartmentName, this.newDepartmentDescription));
  }

  selectDepartment(department) {
    this.selectedDepartment = department;

  }

}
