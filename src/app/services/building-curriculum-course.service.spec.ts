import { TestBed } from '@angular/core/testing';

import { BuildingCurriculumCourseService } from './building-curriculum-course.service';

describe('BuildingCurriculumCourseService', () => {
  let service: BuildingCurriculumCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingCurriculumCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
