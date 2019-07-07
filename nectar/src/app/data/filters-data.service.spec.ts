import { TestBed } from '@angular/core/testing';

import { FiltersDataService } from './filters-data.service';

describe('FiltersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiltersDataService = TestBed.get(FiltersDataService);
    expect(service).toBeTruthy();
  });
});
