import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FiltersBarComponent} from './filters-bar.component';
import {FilterButtonComponent} from '../filter-button/filter-button.component';
import {MatDialog} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

describe('FiltersBarComponent', () => {
  let component: FiltersBarComponent;
  let fixture: ComponentFixture<FiltersBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      declarations: [ FiltersBarComponent, FilterButtonComponent ],
      providers: [
        { provide: MatDialog, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
