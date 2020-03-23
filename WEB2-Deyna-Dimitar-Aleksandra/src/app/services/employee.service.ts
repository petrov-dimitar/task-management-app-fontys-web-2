import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees: Employee[] = [{ id: '1', first_name: 'George', last_name: "Petkov", department_id: 3, birth_date: 20, city: 'Test City', department: 'HR' }, { id: '2', first_name: 'Ivan', last_name:"Milchev", department_id: 3, birth_date: 20, city: 'Test City', department: 'HR' }, { id: '3', first_name: 'Victoria', last_name:"Buchkova", department_id: 3, birth_date: 20, city: 'Test City', department: 'HR' }];

  getEmployee(): Observable<Employee[]> {
    return of(this.employees);
  }
}
