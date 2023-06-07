import { Component } from '@angular/core';
@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent {
  schedule: string[][] = [
    ["", "ראשון", "שני", "שלישי", "רביעי", "חמישי"],
    ["שעה ראשונה", "יהדות חינוכית", "", "", "", ""],
    ["18:30-19:45", "", "", "יהדות חינוכית", "", ""],
    ["19:45-20:30", "", "יהדות חינוכית", "", "השמעיני", ""],
    ["18:30-19:45", "", "", "", "", ""],
    ["19:45-20:30", "השמעיני", "", "", "", ""],
    ["19:45-20:30", "", "", "", "", ""],
    ["שעה אחרונה", "", "", "", "", ""]
  ]
}

