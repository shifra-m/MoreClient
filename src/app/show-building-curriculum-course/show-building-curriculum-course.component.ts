import { Component } from '@angular/core';
import { BuildingCurriculumCourse } from 'src/models/BuildingCurriculumCourse';
import { BuildingCurriculumDay } from 'src/models/BuildingCurriculumDay';
import { BuildingCurriculumCourseService } from '../services/building-curriculum-course.service';
import { BuildingCurriculumDayService } from '../services/building-curriculum-day.service';
// import { Observable } from 'rxjs';
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
  }
}
