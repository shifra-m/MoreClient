import { TestBed } from '@angular/core/testing';

import { BuildingCurriculumDayService } from './building-curriculum-day.service';

describe('BuildingCurriculumDayService', () => {
  let service: BuildingCurriculumDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingCurriculumDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
