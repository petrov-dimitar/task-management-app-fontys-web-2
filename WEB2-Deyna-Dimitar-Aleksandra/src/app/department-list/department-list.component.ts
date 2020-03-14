import { Component, OnInit } from '@angular/core';
import { Department } from '../interfaces/department';
import { Task } from '../interfaces/task';
import { DepartmentsService } from '../services/departments.service'


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor(private departmentService: DepartmentsService) {

  }
  newID: string;
  newDepartmentName: string;
  newDepartmentDescription: string;
  tasks: Task[];
  departments: Department[];
  selectedDepartment: Department;

  ngOnInit(): void {
    this.getDepartments()


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

  getDepartments(): void {
    this.departmentService.getDepartments()
      .subscribe(departments => this.departments = departments);
  }

}
