import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {LogoComponent} from './components/logo/logo.component';
import {FiltersBarComponent} from './components/filters-bar/filters-bar.component';
import {AppliedFiltersComponent} from './components/applied-filters/applied-filters.component';
import {FilterButtonComponent} from './components/filter-button/filter-button.component';
import {MatDialogModule, MatExpansionModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FilterOptionsComponent} from './components/filter-options/filter-options.component';
import {MoreFiltersComponent} from './components/more-filters/more-filters.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatDialogModule,
        MatExpansionModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent, LogoComponent, FiltersBarComponent, AppliedFiltersComponent, FilterButtonComponent,
        FilterOptionsComponent, MoreFiltersComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
