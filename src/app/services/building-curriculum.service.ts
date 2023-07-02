import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingCurriculum } from 'src/models/BuildingCurriculum';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BuildingCurriculumService {
    constructor(public http: HttpClient) {
        
    }
    routeUrl = `${environment.baseUrl}/BuildingCurriculum`;
    addBuildingCurriculum(buildingCurriculum: BuildingCurriculum) {
        return this.http.post<BuildingCurriculum>(this.routeUrl, buildingCurriculum);
    }
    deleteBuildingCurriculum(id: string) {
        return this.http.delete<BuildingCurriculum>(`${this.routeUrl}/${id}`)
    }
    getAllBuildingCurriculum() {
        return this.http.get<BuildingCurriculum[]>(this.routeUrl);
    }
    getBuildingCurriculumById(id: number) {
        return this.http.get<BuildingCurriculum>(`${this.routeUrl}/${id}`);
    }
    // updateBuildingCurriculumy(buildingCurriculum: BuildingCurriculum) {
    //   return this.http.put<BuildingCurriculum>(`${this.routeUrl}/${buildingCurriculum.buildingCurriculumID}`, buildingCurriculumDay);
    // }
}
