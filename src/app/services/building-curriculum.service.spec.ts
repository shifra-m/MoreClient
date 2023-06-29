import { TestBed } from '@angular/core/testing';

import { BuildingCurriculumService } from './building-curriculum.service';

describe('BuildingCurriculumService', () => {
  let service: BuildingCurriculumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingCurriculumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
