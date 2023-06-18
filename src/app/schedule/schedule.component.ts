import { Component } from '@angular/core';
import { ScheduleEvent } from 'src/models/ScheduleEvent';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  ngOnInit() {
    this.lessons = [
      { name: 'תורה', code: 'tora', color: "gray" },
      { name: 'דינים', code: 'dinim', color: "pink" },
      { name: 'יהדות', code: 'yahdut', color: "red" },
      { name: 'השמעיני', code: 'hashmieni', color: "yellow" },
      { name: 'אנגלית', code: 'english', color: "aqua" },
      { name: 'מתמטיקה', code: 'math', color: "lightblue" },
    ];

  }
  schedule: any[][] = [
    ["שעה ראשונה", new ScheduleEvent(1, ""), new ScheduleEvent(2, ""), new ScheduleEvent(3, ""), new ScheduleEvent(4, ""), new ScheduleEvent(5, "")],
    ["18:30-19:45", new ScheduleEvent(6, ""), new ScheduleEvent(7, ""), new ScheduleEvent(8, ""), new ScheduleEvent(9, ""), new ScheduleEvent(10, "")],
    ["19:45-20:30", new ScheduleEvent(11, ""), new ScheduleEvent(12, ""), new ScheduleEvent(13, ""), new ScheduleEvent(14, ""), new ScheduleEvent(15, "")],
    ["18:30-19:45", new ScheduleEvent(16, ""), new ScheduleEvent(17, ""), new ScheduleEvent(18, ""), new ScheduleEvent(19, ""), new ScheduleEvent(20, "")],
    ["19:45-20:30", new ScheduleEvent(21, ""), new ScheduleEvent(22, ""), new ScheduleEvent(23, ""), new ScheduleEvent(24, ""), new ScheduleEvent(25, "")],
    ["19:45-20:30", new ScheduleEvent(26, ""), new ScheduleEvent(27, ""), new ScheduleEvent(28, ""), new ScheduleEvent(29, ""), new ScheduleEvent(30, "")],
    ["שעה אחרונה", new ScheduleEvent(31, ""), new ScheduleEvent(32, ""), new ScheduleEvent(33, ""), new ScheduleEvent(34, ""), new ScheduleEvent(35, "")]]

  lessons: any[] = [];
  selectedLesson: any;
  visible: boolean = false;
  iIndex: number = 0;
  jIndex: number = 0;
  placeholderValue: string = "";
  color: string="pink";
  constructor() { }
  showDialog(i: number, j: number) {
    console.log("i", "j", i, j)
    this.iIndex = i;
    this.jIndex = j;
    this.visible = true;
  }
  saveEvent() {
    this.visible = false;
    this.schedule[this.iIndex][this.jIndex].event = this.selectedLesson.name;
    this.schedule[this.iIndex][this.jIndex].color=this.selectedLesson.color;
  }
  deleteEvent() {
    this.schedule[this.iIndex][this.jIndex].event = "";
    this.schedule[this.iIndex][this.jIndex].color="white";
    this.selectedLesson = null;
  }

}
