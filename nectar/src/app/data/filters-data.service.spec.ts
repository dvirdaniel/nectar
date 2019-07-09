import {inject, TestBed} from '@angular/core/testing';

import {FiltersDataService} from './filters-data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FiltersDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientTestingModule ],
    providers: [ FiltersDataService ]
  }));

  it('should be created', () => {
    const service: FiltersDataService = TestBed.get(FiltersDataService);
    expect(service).toBeTruthy();
  });
/*
  it('#setForms should set the forms attribute', () => {
    const service: FiltersDataService = TestBed.get(FiltersDataService);

    expect(service.allFilters.length).toEqual(6);
  });
 */
});
