import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task/task-list/task-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './task/calendar/calendar.component';

const routes: Routes = [
  { path: 'task-list-component', component: TaskListComponent },
  { path: 'employee-list-component', component: EmployeeListComponent },
  { path: 'department-list-component', component: DepartmentListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: DashboardComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }