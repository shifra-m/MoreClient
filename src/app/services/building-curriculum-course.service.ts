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
  routeUrl=`${environment.baseUrl}/BuildingCurriculumCourse`;


  // addBuildingCurriculumDay(buildingCurriculumDay: BuildingCurriculumDay): Observable<any> {

  //   return this.http.post<object>(`${this.routeUrl}Day/?bcd=${buildingCurriculumDay}`, buildingCurriculumDay)

  // }


  getAllCourses(){
    return this.http.get<BuildingCurriculumCourse[]>(this.routeUrl);
  }

  getCourseById(id: number) {
    return this.http.get<BuildingCurriculumCourse>(`${this.routeUrl}/${id}`);
  }

}
