import { Component } from '@angular/core';
import { BuildingCurriculumCourse } from 'src/models/BuildingCurriculumCourse';
import { BuildingCurriculumCourseService } from '../services/building-curriculum-course.service';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-show-building-curriculum-course',
  templateUrl: './show-building-curriculum-course.component.html',
  styleUrls: ['./show-building-curriculum-course.component.css']
})
export class ShowBuildingCurriculumCourseComponent {
  courseArr: BuildingCurriculumCourse[] = []
  constructor(public buildingCurriculumCourseService: BuildingCurriculumCourseService) {
    this.buildingCurriculumCourseService.getAllCourses().subscribe(succ => {
      this.courseArr = succ;
      console.log(this.courseArr)
    });

  }
}
