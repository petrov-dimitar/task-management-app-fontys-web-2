import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/services/task.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { DepartmentsService } from 'src/app/services/departments.service';
import { Task } from 'src/app/interfaces/task';
import { Employee } from 'src/app/interfaces/employee';
import { Department } from 'src/app/interfaces/department';

@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css']
})
export class AddTaskDialogComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public taskService: TaskService, private employeeService: EmployeeService, private departmentService: DepartmentsService, public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }


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
  }

  addTask() {
    this.tasks.push(new Task(this.newId, this.newTask, this.newTaskDescription, this.selectedDueDate, this.selectedEmployee, this.selectedDepartment));
  }

  selectTask(task) {
    this.selectedTask = task;
  }

}
