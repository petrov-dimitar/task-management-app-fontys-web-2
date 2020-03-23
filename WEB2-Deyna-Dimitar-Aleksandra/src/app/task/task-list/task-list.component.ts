import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/task';
import { TaskService } from '../../services/task.service'
import { Employee } from '../../interfaces/employee';
import { EmployeeService } from '../../services/employee.service';
import { DepartmentsService } from '../../services/departments.service';
import { Department } from '../../interfaces/department';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']

})

export class TaskListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'start', 'end', 'assignedEmployee', 'assignedDepartment', 'description', 'actions'];


  constructor(public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService, public dialog: MatDialog) { }
  newId: string;
  newTask: string;
  newTaskDescription: string;
  newDeadlineDate: Date;
  tasks: Task[];
  selectedTask: Task;
  employees: Employee[];
  selectedDueDate: Date;
  selectedEmployee: Employee;
  departments: Department[];
  selectedDepartment: Department;
  selectedstartDate: Date = new Date();


  ngOnInit() {

    this.getTasks();
    this.getEmployees();
    this.getDepartments();
  }
  getTasks(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  getEmployees(): void {
    this.employeeService.getEmployee().subscribe(emp => this.employees = emp);
  }
  getDepartments(): void {
    this.departmentService.getDepartments().subscribe(dep => this.departments = dep);
  }
  deleteTask(task: Task) {
    let index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
    this.table.renderRows();
  }
  @ViewChild(MatTable) table: MatTable<any>;
  addTask() {
    this.tasks.push(new Task(this.newId, this.newTask, this.newTaskDescription, this.selectedstartDate, this.selectedDueDate, this.selectedEmployee, this.selectedDepartment));
  }

  selectTask(task) {
    this.selectedTask = task;
  }


  openDialog(): void {

    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '60vw',
      data: { name: 'testData' }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.table.renderRows();
    });
  }


}
