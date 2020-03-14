import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees: Employee[] = [{id: 'TestId', name: 'Test Employee', age: 21, city: 'Test City', departmentId: '1'}];

  getEmployee(): Observable<Employee[]>{
  return of(this.employees);
  }
}
