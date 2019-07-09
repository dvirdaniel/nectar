import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FilterOptionsComponent} from './filter-options.component';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material';

describe('FilterOptionsComponent', () => {
  let component: FilterOptionsComponent;
  let fixture: ComponentFixture<FilterOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MatDialogModule ],
      declarations: [ FilterOptionsComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
