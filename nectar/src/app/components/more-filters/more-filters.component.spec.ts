import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MoreFiltersComponent} from './more-filters.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef, MatExpansionModule} from '@angular/material';

describe('MoreFiltersComponent', () => {
  let component: MoreFiltersComponent;
  let fixture: ComponentFixture<MoreFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule, MatExpansionModule ],
      declarations: [ MoreFiltersComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: [] },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
