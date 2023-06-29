import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/models/Course';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(public http:HttpClient) { }
  routeUrl = `${environment.baseUrl}/Course`;

  getAllCourses() {
    return this.http.get<Course[]>(this.routeUrl);
  }
  getCourseById(id: number) {
    return this.http.get<Course>(`${this.routeUrl}/${id}`);
  }
  addCourse(course: Course) {
    return this.http.post<Course>(this.routeUrl, course);
  }
  deleteCourse(id: string) {
    return this.http.delete<Course>(`${this.routeUrl}/${id}`)
  }
  // updateCourse(course: Course) {
  //   return this.http.put<Course>(`${this.routeUrl}/${course.IDCourse}`, course);
  // }
}
