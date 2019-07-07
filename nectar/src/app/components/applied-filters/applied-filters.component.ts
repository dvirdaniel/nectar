import {Component, Input, OnInit} from '@angular/core';
import {FilterOption} from '../../models/filter-option';

@Component({
  selector: 'applied-filters',
  templateUrl: './applied-filters.component.html',
  styleUrls: ['./applied-filters.component.less']
})
export class AppliedFiltersComponent implements OnInit {

  @Input() private appliedFilterOptions: Array<FilterOption> = new Array<FilterOption>();

  constructor() {

  }

  ngOnInit() {
  }

  clearAll() {
    this.appliedFilterOptions = new Array<FilterOption>();
  }
}
