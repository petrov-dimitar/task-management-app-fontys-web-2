import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees: Employee[] = [{ id: '1', name: 'George', age: 20, city: 'Test City', department: 'HR' }, { id: '2', name: 'Ivan', age: 20, city: 'Test City', department: 'HR' }, { id: '3', name: 'Victoria', age: 20, city: 'Test City', department: 'HR' }];

  getEmployee(): Observable<Employee[]> {
    return of(this.employees);
  }
}
