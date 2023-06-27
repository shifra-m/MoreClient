import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBuildingCurriculumCourseComponent } from './show-building-curriculum-course.component';

describe('ShowBuildingCurriculumCourseComponent', () => {
  let component: ShowBuildingCurriculumCourseComponent;
  let fixture: ComponentFixture<ShowBuildingCurriculumCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBuildingCurriculumCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBuildingCurriculumCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
