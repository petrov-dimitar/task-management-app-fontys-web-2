import { Injectable } from '@angular/core';
import { Employee } from '../interfaces/employee';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(public httpClient: HttpClient) { }
  url = "http://i875395.hera.fhict.nl/api/3375471/employee";
  employees: Employee[] = [];

  getEmployee(): Observable<Employee[]> {
    return of(this.employees);
  }
  getEmployeesFromServer(): Observable<Employee[]> {

    return this.httpClient.get<Employee[]>(this.url);
  }
  deleteEmployeeWithId(id: number): Observable<{}> {
    const url = `${this.url}?id=${id}`;
    return this.httpClient.delete(url);
  }
    addEmployeeToServer(employe: Employee): Observable<Employee> {
      return this.httpClient.post<Employee>(this.url,
        {
          "first_name": `${employe.first_name}`,
          "last_name": `${employe.last_name}`,
          "birth_date": `${employe.birth_date}`,
          "department_id": `${employe.department_id}`,
        }, httpOptions).pipe(
          catchError(this.handleError('deleteEmployee', employe))
        );
    }
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.log(`failed: ${error.message}`);
        return of(result as T);
      };
    }
}

