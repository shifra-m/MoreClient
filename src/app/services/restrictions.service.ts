import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingCurriculumRestrictions } from 'src/models/BuildingCurriculumRestrictions';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestrictionsService {
  buildingCurriculumRestrictions: BuildingCurriculumRestrictions = new BuildingCurriculumRestrictions();

  constructor(public http: HttpClient) {
    this.getBuildingCurriculumById(1).subscribe(succ => {
      this.buildingCurriculumRestrictions = succ;
      console.log("service restriction", this.buildingCurriculumRestrictions)
    });
   }

  routeUrl = `${environment.baseUrl}/BuildingCurriculumRestrictions`;
  getAllRestrictions() {
    return this.http.get<BuildingCurriculumRestrictions[]>(this.routeUrl);
  }
  getBuildingCurriculumById(buildingCurriculumID: number) {
    return this.http.get<BuildingCurriculumRestrictions>(`${this.routeUrl}/GetBuildingCurriculumID/${buildingCurriculumID}`);
  }

  // getDayById(id: number) {
  //   return this.http.get<BuildingCurriculumRestrictions>(`${this.routeUrl}/${id}`);
  // }
  // addDay(buildingCurriculumDay: BuildingCurriculumRestrictions) {
  //   return this.http.post<BuildingCurriculumRestrictions>(this.routeUrl, buildingCurriculumDay);
  // }
  // deleteDay(id: string) {
  //   return this.http.delete<BuildingCurriculumRestrictions>(`${this.routeUrl}/${id}`)
  // }
  // updateDay(buildingCurriculumDay: BuildingCurriculumRestrictions) {
  //   return this.http.put<BuildingCurriculumRestrictions>(`${this.routeUrl}/${buildingCurriculumDay.buildingCurriculumID}`, buildingCurriculumDay);
  // }




    
  min(min: number | null) {
    if (this.buildingCurriculumRestrictions.min == null)
      return false;
    if (min == null)
      return false;
    return !(min >= this.buildingCurriculumRestrictions.min);
  }
  max(max: number | null) {
    if (this.buildingCurriculumRestrictions.max == null)
      return false;
    if (max == null)
      return false;
    return !(max <= this.buildingCurriculumRestrictions.max);
  }
  required(flag: boolean | null) {
    if (this.buildingCurriculumRestrictions.required == null)
      return false;
    if (flag == null)
      return false;
    return !(this.buildingCurriculumRestrictions.required);
  }
  //the date of the current day
  startDate(date: Date | null) {
    if (this.buildingCurriculumRestrictions.startDate == null)
      return false;
    if (date == null)
      return false;
    return !(this.buildingCurriculumRestrictions.startDate >= date);
  }
  endDate(date: Date | null) {
    if (this.buildingCurriculumRestrictions.endDate == null)
      return false;
    if (date == null)
      return false;
    return !(this.buildingCurriculumRestrictions.endDate <= date);
  }
  biggerThan(num: number | null) {
    if (this.buildingCurriculumRestrictions.bigger_than == null)
      return false;
    if (num == null)
      return false;
    return !(this.buildingCurriculumRestrictions.bigger_than > num);
  }
  smallerThan(num: number | null) {
    if (this.buildingCurriculumRestrictions.smaller_than == null)
      return false;
    if (num == null)
      return false;
    return !(this.buildingCurriculumRestrictions.smaller_than < num);
  }
  equal(num: number | null) {
    if (this.buildingCurriculumRestrictions.equal == null)
      return false;
    if (num == null)
      return false;
    return !(this.buildingCurriculumRestrictions.equal == num);
  }
}
