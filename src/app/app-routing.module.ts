import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowBuildingCurriculumCourseComponent } from './show-building-curriculum-course/show-building-curriculum-course.component';


const routes: Routes = [
  { path: "show", component: ShowBuildingCurriculumCourseComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
