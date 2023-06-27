import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingCurriculumRestrictions } from 'src/models/BuildingCurriculumRestrictions';

@Injectable({
  providedIn: 'root'
})
export class RestrictionsService {
  buildingCurriculumRestrictions: BuildingCurriculumRestrictions = new BuildingCurriculumRestrictions(1, 1, 1, true, 1, new Date(), new Date(), 1, 1, 1, 1);
  constructor(public http: HttpClient) { }
  
  min(min: number) {
    if (this.buildingCurriculumRestrictions.Min == null)
      return;
    return min >= this.buildingCurriculumRestrictions.Min;
  }
  max(max: number) {
    if (this.buildingCurriculumRestrictions.Max == null)
      return;
    return max <= this.buildingCurriculumRestrictions.Max;
  }
  required() {
    return this.buildingCurriculumRestrictions.Required;
  }
  //the date of the current day
  startDate(date: Date) {
    if (this.buildingCurriculumRestrictions.StartDate == null)
      return;
    return this.buildingCurriculumRestrictions.StartDate >= date;
  }
  endDate(date: Date) {
    if (this.buildingCurriculumRestrictions.EndDate == null)
      return;
    return this.buildingCurriculumRestrictions.EndDate <= date;
  }
  biggerThan(num: number) {
    if (this.buildingCurriculumRestrictions.Bigger_than == null)
      return;
    return this.buildingCurriculumRestrictions.Bigger_than > num;
  }
  smallerThan(num: number) {
    if (this.buildingCurriculumRestrictions.Smaller_than == null)
      return;
    return this.buildingCurriculumRestrictions.Smaller_than < num;
  }
  Equal(num: number) {
    if (this.buildingCurriculumRestrictions.Equal == null)
      return;
    return this.buildingCurriculumRestrictions.Equal == num;
  }
}
