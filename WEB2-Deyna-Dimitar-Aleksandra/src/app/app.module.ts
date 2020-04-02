import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddTaskDialogComponent } from './task/add-task-dialog/add-task-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddDepartmentDialogComponent } from './department/add-department-dialog/add-department-dialog.component';
import { AddEmployeeDialogComponent } from './employee/add-employee-dialog/add-employee-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { CalendarComponent } from './task/calendar/calendar.component';
import { NgxTimeSchedulerModule } from 'ngx-time-scheduler';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    DashboardComponent,
    AddTaskDialogComponent,
    AddDepartmentDialogComponent,
    AddEmployeeDialogComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
    , MatSliderModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatCardModule,
    NgxTimeSchedulerModule,
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
