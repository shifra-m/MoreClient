import { Component } from '@angular/core';
import { BuildingCurriculumCourse } from 'src/models/BuildingCurriculumCourse';
import { BuildingCurriculumDay } from 'src/models/BuildingCurriculumDay';
import { BuildingCurriculumCourseService } from '../services/building-curriculum-course.service';
import { BuildingCurriculumDayService } from '../services/building-curriculum-day.service';
// import { Observable } from 'rxjs';
import {HebrewCalendar, HDate, Location, Event, Locale} from '@hebcal/core';


//import hebrewDate = require('hebrew-date');
@Component({
  selector: 'app-show-building-curriculum-course',
  templateUrl: './show-building-curriculum-course.component.html',
  styleUrls: ['./show-building-curriculum-course.component.css']
})
export class ShowBuildingCurriculumCourseComponent {
  courseArr: BuildingCurriculumCourse[] = [];
  dayArr: BuildingCurriculumDay[] = [];
  day:BuildingCurriculumDay=new BuildingCurriculumDay(null,null);
  
  constructor(public buildingCurriculumCourseService: BuildingCurriculumCourseService,public buildingCurriculumDayService:BuildingCurriculumDayService) {
   ///עבור תאריך עברי
    const options = {
      year: 2023,
      isHebrewYear: true,
      candlelighting: true,
      location: Location.lookup('Jerusalem'),
      sedrot: true,
      omer: true,
    };
    const events = HebrewCalendar.calendar(options);
    const hd2 = new HDate(new Date());
    const s =hd2.getMonthName();
    console.log(hd2.render('he'),hd2.renderGematriya(), hd2.toString())
    /* for (const ev of events) {
      Locale.useLocale('he');
      const hd = ev.getDate();
     // const l=ev.useLocale(locale) 
      const date = hd.getMonthName();
      console.log(date, ev.render('he'), hd.toString()); */
    //}
    // this.buildingCurriculumCourseService.getAllCourses().subscribe(succ => {
    //   this.courseArr = succ;
    //   console.log(this.courseArr)
    // });

    this.buildingCurriculumDayService.getAllDays().subscribe(succ => {
      this.dayArr = succ;
      console.log(this.dayArr)
    });

    this.buildingCurriculumDayService.getDayById(3).subscribe(succ => {
      this.day = succ;
      console.log("day",this.day)
    });
   // const  = require("");

    // When not providing a date object, the months are one-indexed
    
  }
}
