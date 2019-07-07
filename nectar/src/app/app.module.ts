import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogoComponent} from './components/logo/logo.component';
import {FiltersBarComponent} from './components/filters-bar/filters-bar.component';
import {AppliedFiltersComponent} from './components/applied-filters/applied-filters.component';
import {HttpClientModule} from '@angular/common/http';
import {FilterOptionsComponent} from './components/filter-options/filter-options.component';
import {FilterButtonComponent} from './components/filter-button/filter-button.component';
import {FilterOptionSelectedComponent} from './components/filter-option-selected/filter-option-selected.component';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    FilterOptionsComponent,
    FilterButtonComponent,
    FiltersBarComponent,
    AppliedFiltersComponent,
    FilterOptionSelectedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FilterOptionsComponent]
})
export class AppModule { }
