import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  { path: 'task-list-component', component: TaskListComponent },
  { path: 'employee-list-component', component: EmployeeListComponent },
  { path: 'department-list-component', component: DepartmentListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }