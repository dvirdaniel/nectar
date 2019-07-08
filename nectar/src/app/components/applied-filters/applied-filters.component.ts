import {Component, OnInit} from '@angular/core';
import {AppliedFiltersService} from '../../data/applied-filters.service';
import {FilterOption} from '../../models/filter-option';

@Component({
  selector: 'applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.less']
})
export class AppliedFiltersComponent implements OnInit {

  constructor(private appliedFiltersService: AppliedFiltersService) {

  }

  ngOnInit() {
  }

  removeSelected(filterOption: FilterOption) {
    this.appliedFiltersService.removeFilterOption(filterOption);
  }

  clearAll() {
    this.appliedFiltersService.clearAll();
  }

  getAppliedFilterOptions(): Array<FilterOption> {
    return  this.appliedFiltersService.getAllFilterOptions();
  }

  isEmpty() {
    return this.appliedFiltersService.isEmpty();
  }
}
