import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { HDate } from '@hebcal/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    locale: 'he',
    direction: 'rtl',
    dayCellContent:this.myHebrewDate,
    
  };
  customDayCellContent(arg: any):Date {
    let text = arg.date.getDate().toString(); // Customize the content as desired
    let date = arg.date; // Retrieve the date as a JavaScript Date object
    console.log("date  !!!!!!!!!!", date)
    return date;
  }
  onDayCellMount = (info: any) => {
    const cellElement = info.el;
    const cellDate = info.date;
  }
  myHebrewDate(arg:any) {
    let text = arg.date.getDate().toString(); // Customize the content as desired
    let loaziDate = arg.date; // Retrieve the date as a JavaScript Date object
    const hd2 = new HDate(loaziDate);
    const s = hd2.getMonthName();
    const day = hd2.getDay();
    const date = hd2.renderGematriya();
    console.log("date", hd2.renderGematriya())
    return date;
  }
  month(loazidate: Date) {
    const hd2 = new HDate(loazidate);
    const s = hd2.getMonthName();
    console.log(s)
    return s;
  }
}
