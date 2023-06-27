import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingCurriculumDay } from 'src/models/BuildingCurriculumDay';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildingCurriculumDayService {

  constructor(public http:HttpClient) { }
  routeUrl = `${environment.baseUrl}/BuildingCurriculumDay`;
  getAllDays() {
    return this.http.get<BuildingCurriculumDay[]>(this.routeUrl);
  }
  getDayById(id: number) {
    return this.http.get<BuildingCurriculumDay>(`${this.routeUrl}/${id}`);
  }
  addDay(buildingCurriculumDay: BuildingCurriculumDay) {
    return this.http.post<BuildingCurriculumDay>(this.routeUrl, buildingCurriculumDay);
  }
  deleteDay(id: string) {
    return this.http.delete<BuildingCurriculumDay>(`${this.routeUrl}/${id}`)
  }
  updateDay(buildingCurriculumDay: BuildingCurriculumDay) {
    return this.http.put<BuildingCurriculumDay>(`${this.routeUrl}/${buildingCurriculumDay.buildingCurriculumID}`, buildingCurriculumDay);
  }
}
