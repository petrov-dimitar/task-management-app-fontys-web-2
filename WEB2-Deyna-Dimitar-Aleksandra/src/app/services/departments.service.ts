import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
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
export class DepartmentsService {
  constructor(public httpClient: HttpClient) { }
  url = "http://i875395.hera.fhict.nl/api/3595234/department";
  departments: Department[] = [];
    getDepartmentsFromServer(): Observable<Department[]> {

      return this.httpClient.get<Department[]>(this.url);
    }
    deleteDepartmentWithId(id: number): Observable<{}> {
      const url = `${this.url}?id=${id}`;
      return this.httpClient.delete(url);
    }
    addDepartmentToServer(department: Department): Observable<Department> {
      return this.httpClient.post<Department>(this.url,
        {
          "name": `${department.name}`,
          "building": `${department.building}`,
        }, httpOptions).pipe(
          catchError(this.handleError('deleteDepartment', department))
        );
    }
    
  getDepartments(): Observable<Department[]> {
    return of(this.departments);
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(`failed: ${error.message}`);
      return of(result as T);
    };
  }
}
