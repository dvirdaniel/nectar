import { TestBed } from '@angular/core/testing';

import { AppliedFiltersService } from './applied-filters.service';

describe('AppliedFiltersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppliedFiltersService = TestBed.get(AppliedFiltersService);
    expect(service).toBeTruthy();
  });
});
