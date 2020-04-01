
import { Component, OnInit } from '@angular/core';
import { Item, Period, Section, Events, NgxTimeSchedulerService } from 'ngx-time-scheduler';
import * as moment from 'moment';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/interfaces/task';
import { CalendarService } from 'src/app/services/calendar.service';
import { MatDialog } from '@angular/material/dialog';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  events: Events = new Events();
  periods: Period[];
  sections: Section[];
  items: Item[] = [];
  tasks: Task[];
  constructor(private service: NgxTimeSchedulerService, private taskService: TaskService, private calendarService: CalendarService, public dialog: MatDialog) { }

  ngOnInit() {

    this.getTasks();
    this.getCalendarItems();
    this.events.SectionClickEvent = (section) => { console.log(section); };
    this.events.ItemClicked = (item) => { console.log(item); };
    this.events.ItemDropped = (item) => { console.log(item); };

    this.periods = [
      {
        name: '1 week',
        timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
        classes: 'button-period',
        timeFrameOverall: 1440 * 7,
        timeFramePeriod: 1440,
      }, {
        name: '2 week',
        timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
        classes: '',
        timeFrameOverall: 1440 * 14,
        timeFramePeriod: 1440,
      }];

    this.sections = [{
      name: 'A',
      id: 1
    }, {
      name: 'B',
      id: 2
    }, {
      name: 'C',
      id: 3
    }, {
      name: 'D',
      id: 4
    }, {
      name: 'E',
      id: 5
    }];



  }

  addItem() {
    this.service.itemPush({
      id: 4,
      sectionID: 5,
      name: 'Item 4',
      start: moment().startOf('day'),
      end: moment().add(3, 'days').endOf('day'),
      classes: ''
    });
  }

  popItem() {
    this.service.itemPop();
  }

  removeItem(id: number) {
    this.service.itemRemove(id);
  }

  getTasks(): void {

    this.taskService.getTasks().subscribe(tasks => {
      console.log("Tasks Changed");
      this.tasks = tasks;
    });
  }

  getCalendarItems(): void {
    this.calendarService.getItems().subscribe(item => {
      this.items = item;
      console.log("Items Changed")
    })
  }
  openDialog(): void {

    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '60vw',
      data: { name: 'testData' }

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.taskService.getTasksFromServer().subscribe(tasks => {
        this.tasks = tasks;
        console.log(tasks);
      })

    });
  }

}
