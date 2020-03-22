
import { Component, OnInit } from '@angular/core';
import { Item, Period, Section, Events, NgxTimeSchedulerService } from 'ngx-time-scheduler';
import * as moment from 'moment';
import { TaskService } from '../../services/task.service';
import { Task } from 'src/app/interfaces/task';

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
  constructor(private service: NgxTimeSchedulerService, private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();

    this.events.SectionClickEvent = (section) => { console.log(section); };
    this.events.ItemClicked = (item) => { console.log(item); };
    this.events.ItemDropped = (item) => { console.log(item); };

    this.periods = [
      {
        name: '3 days',
        timeFramePeriod: (60 * 3),
        timeFrameOverall: (60 * 24 * 3),
        timeFrameHeaders: [
          'Do MMM',
          'HH'
        ],
        classes: 'period-3day'
      }, {
        name: '1 week',
        timeFrameHeaders: ['MMM YYYY', 'DD(ddd)'],
        classes: '',
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

    this.items = [{
      id: 1,
      sectionID: 1,
      name: 'Item 1',
      start: moment().startOf('day'),
      end: moment().add(5, 'days').endOf('day'),

    }, {
      id: 3,
      sectionID: 1,
      name: 'Item 3',
      start: moment().add(1, 'days').startOf('day'),
      end: moment().add(3, 'days').endOf('day'),

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


      tasks.forEach(task => {

        console.log(task);
        this.service.itemPush(
          {
            id: Number(task.id), sectionID: 2, name: task.name, start: moment().startOf('day'),
            end: moment().add(4, 'days').endOf('day'), classes: ""
          }
        )
      })
    });
  }
}
