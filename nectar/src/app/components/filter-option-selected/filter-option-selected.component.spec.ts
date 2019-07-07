import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionSelectedComponent } from './filter-option-selected.component';

describe('FilterOptionSelectedComponent', () => {
  let component: FilterOptionSelectedComponent;
  let fixture: ComponentFixture<FilterOptionSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterOptionSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
