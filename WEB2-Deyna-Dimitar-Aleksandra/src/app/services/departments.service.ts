import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  departments: Department[] =
    [
      { id: '1', name: 'Human resources', description: 'This department deals with employees inside the organization' },
      { id: '2', name: 'Marketing', description: 'This department deals with marketing' },
      { id: '3', name: 'Sales', description: 'This department deals Sales' }
    ];
  constructor() { }

  getDepartments(): Observable<Department[]> {
    return of(this.departments);
  }
}
