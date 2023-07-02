import { Component } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { BuildingCurriculum } from 'src/models/BuildingCurriculum';
import { BuildingCurriculumRestrictions } from 'src/models/BuildingCurriculumRestrictions';
import { Course } from 'src/models/Course';
import { ScheduleEvent } from 'src/models/ScheduleEvent';
import { BuildingCurriculumService } from '../services/building-curriculum.service';
import { CourseService } from '../services/course.service';
import { RestrictionsService } from '../services/restrictions.service';

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
  // myCourse: Course = new Course();
  lessons: any[] = [];
  selectedCourse: Course = new Course();
  visible: boolean = false;
  iIndex: number = 0;
  jIndex: number = 0;
  placeholderValue: string = "";
  color: string = "pink";
  tooltipText: string = 'ש"ש,שעות,נ.ז,מחיר,מיקום,ציון מינמלי,שנתון,מתאריך,עד תאריך';
  tooltipCondition: boolean = true;
  help: any = false;
  buildingCurriculumRestrictions: BuildingCurriculumRestrictions = new BuildingCurriculumRestrictions(1, 1, 1, true, 1, new Date(), new Date(), 1, 1, 1, 1);
  buildingCurriculum: BuildingCurriculum = new BuildingCurriculum();
  courseArr: Course[] = [];
  sumHours: number = 0;
  RestrictionsArr: BuildingCurriculumRestrictions[] = [];
  coursesList: Course[] = [];
  constructor(public restrictionsService: RestrictionsService, public courseService: CourseService, public buildingCurriculumService: BuildingCurriculumService) {
    this.restrictionsService.getAllRestrictions().subscribe(succ => {
      this.RestrictionsArr = succ;
      console.log("restrictions arr", this.RestrictionsArr)
    });
    this.restrictionsService.getBuildingCurriculumById(1).subscribe(succ => {
      this.buildingCurriculumRestrictions = succ;
      console.log("restriction", this.buildingCurriculumRestrictions)
    });
    this.courseService.getAllCourses().subscribe(succ => {
      this.courseArr = succ;
      console.log("course arr", this.courseArr)
    });
    this.fetchDataFromServer();
    console.log(this.selectedCourse)

    this.buildingCurriculumService.getBuildingCurriculumById(5).subscribe(succ => {
      this.buildingCurriculum = succ;
      console.log("service building curriculum", this.buildingCurriculum)
    });
  }
  options: SelectItem[] = [];
  flag: boolean = true;
  fetchDataFromServer() {
    // Assuming you have fetched the data from the server and stored it in a variable called 'data'
    this.courseService.getAllCourses().subscribe(data => {
      console.log("data", data)
      this.coursesList = data;
      // this.courseArr = succ;
      // console.log("course arr", this.courseArr)

    });
  }

  // myCourse: Course = new Course();

  check(selectedCourse: any, course: Course) {

    // console.log("check my course", course)
    // console.log("check building curriculum", this.buildingCurriculum)
    if (course.hours == null || this.buildingCurriculum.maxHours == null)
      return this.help = true;
    if (course.hours + this.sumHours < this.buildingCurriculum.maxHours) {
      return this.help = false;
    }
    this.help = true;
    return this.help;
    // if (this.restrictionsService.min(course.minimumScore))
    //   // this.restrictionsService.max(this.buildingCurriculumRestrictions.max) ||
    //   // this.restrictionsService.biggerThan(this.buildingCurriculumRestrictions.bigger_than) ||
    //   // this.restrictionsService.smallerThan(this.buildingCurriculumRestrictions.smaller_than) ||
    //   // this.restrictionsService.endDate(this.buildingCurriculumRestrictions.endDate) ||
    //   // this.restrictionsService.equal(this.buildingCurriculumRestrictions.equal) ||
    //   // this.restrictionsService.required(this.buildingCurriculumRestrictions.required))
    //   this.help = true;
    // else {
    //   this.help = false;
    // }
    // return this.help;
  }
  showDialog(i: number, j: number) {
    console.log("hello show")
    console.log("start dialog sumhour",this.sumHours)
    this.options = this.coursesList.map((item) => {
      console.log("item.name", item.name)
      return {
        label: item.name,
        value: item.name,
        disabled: this.check(item, item), // Set the 'disabled' property based on the server data
        // color:this.color
      };
    });
    // console.log("i", "j", i, j)
    // console.log("visible", this.visible)
    // console.log("selected lesson", this.selectedCourse)
    // console.log("this.schedule[i][j]", this.schedule[i][j])
    this.iIndex = i;
    this.jIndex = j;
    if (this.schedule[this.iIndex][this.jIndex].edit == true) {
      this.visible = true;
      return;
    }
    this.visible = true;
  }
  search(nameCourse?: string): number {
    let hour = this.coursesList.find(c => c.name === nameCourse)?.hours;
    return hour === null || hour === undefined ?  0 : hour;
  }
  saveEvent() {
    console.log("hello save")
    console.log("my selected lesson", this.selectedCourse)
    this.visible = false;
    console.log("i", "j", this.iIndex, this.jIndex);
    console.log("schedule before", this.schedule[this.iIndex][this.jIndex])
    console.log("lesson before", this.selectedCourse)
    this.schedule[this.iIndex][this.jIndex].event = this.selectedCourse.name;
    // this.schedule[this.iIndex][this.jIndex].color = this.selectedCourse.color;
    this.schedule[this.iIndex][this.jIndex].trash = true;
    this.schedule[this.iIndex][this.jIndex].edit = true;
    // if (this.search(this.selectedCourse.name) == null)
    //   this.sumHours += 0;
    // else
    //   this.sumHours += this.selectedCourse.hours;
    this.sumHours+=this.search(this.selectedCourse.name);
    console.log("schedule after", this.schedule[this.iIndex][this.jIndex])
    this.selectedCourse = new Course();
    console.log("lesson after", this.selectedCourse)

    // this.selectedCourse.hours == null ? this.sumHours += 0 : this.sumHours += this.selectedCourse.hours;
    console.log("sumHour", this.sumHours)
  }
  deleteEvent(i: number, j: number, event: Event) {
    console.log("hello delete")
    this.iIndex = i;
    this.jIndex = j;
    event.stopPropagation();
    var num=this.search(this.schedule[this.iIndex][this.jIndex].event);
    console.log("num hours",num);
    console.log("selected course name to delete",this.schedule[this.iIndex][this.jIndex].event)
    this.sumHours-=num;
    console.log("delete sum hour after",this.sumHours);
    this.visible = false;
    this.schedule[this.iIndex][this.jIndex].event = "";
    this.schedule[this.iIndex][this.jIndex].color = "white";
    this.schedule[this.iIndex][this.jIndex].trash = false;
    this.schedule[this.iIndex][this.jIndex].edit = false;
    console.log("delete sum hour before",this.sumHours);

   
    // this.selectedCourse.hours == null ? this.sumHours += 0 : this.sumHours -= this.selectedCourse.hours;
  }
  edit(i: number, j: number) {
    console.log("hello edit");
    
    // this.sumHours+=this.search(this.selectedCourse.name);
    // this.selectedCourse.hours == null ? this.sumHours += 0 : this.sumHours -= this.selectedCourse.hours;
    this.visible = true;
    this.iIndex = i;
    this.jIndex = j;
    var num=this.search(this.schedule[this.iIndex][this.jIndex].event);
    console.log("num hours",num);
    console.log("selected course name to edit",this.schedule[this.iIndex][this.jIndex].event)
    this.sumHours-=num;
    console.log("edit sum hour after",this.sumHours);
    this.schedule[this.iIndex][this.jIndex].edit = true;
  }
}
