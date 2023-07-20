import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ShowBuildingCurriculumCourseComponent } from './show-building-curriculum-course/show-building-curriculum-course.component';
import { NedarimComponent } from './nedarim/nedarim.component';

const routes: Routes = [
  { path: "show", component: ShowBuildingCurriculumCourseComponent },
  { path: "schedule", component: ScheduleComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "nedarim", component: NedarimComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
