import { Component, OnInit } from '@angular/core';
import { Department } from '../interfaces/department';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  constructor() { }

  departments: Department[] = [{ id: '1', depName: 'Human resources', description: 'This department deals with employees inside the organization' }];

  ngOnInit(): void {
  }


  deleteDepartment(task: Department) {
    let index = this.departments.indexOf(task);
    this.departments.splice(index, 1);
  }


}
