import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BuildingCurriculumCourse } from 'src/models/BuildingCurriculumCourse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuildingCurriculumCourseService {

  constructor(public http:HttpClient) { }
  routeUrl=`${environment.baseUrl}`;
  getAllCourses(){
    return this.http.get<BuildingCurriculumCourse[]>(this.routeUrl);
  }

  getCourseById(id: string) {
    return this.http.get<BuildingCurriculumCourse>(`${this.routeUrl}/${id}`);
  }

}
