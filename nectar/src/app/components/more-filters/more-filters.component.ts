import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FilterOption} from '../../models/filter-option';
import {AppliedFiltersService} from '../../data/applied-filters.service';
import {Filter} from '../../models/filter';

@Component({
  selector: 'more-filters',
  templateUrl: './more-filters.component.html',
  styleUrls: ['./more-filters.component.less']
})
export class MoreFiltersComponent implements OnInit {

  private allFilters: Array<Filter>;
  private selectedFilterOptions: Array<FilterOption> = new Array<FilterOption>();

  constructor(private appliedFiltersService: AppliedFiltersService,
              public thisDialogRef: MatDialogRef<MoreFiltersComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Array<Filter>) {
    this.allFilters = data;
    this.appliedFiltersService.getAllFilterOptions().forEach( fo => {
      this.selectedFilterOptions.push(fo);
    });
  }

  ngOnInit() {
  }

  selectFilterOption(filterOption: FilterOption) {
    this.selectedFilterOptions.push(filterOption);
  }

  isSelected(filterOption: FilterOption): boolean {
    return this.selectedFilterOptions.indexOf(filterOption) === -1 ? false : true;
  }

  onApply(filterName: string) {
    const filters: Array<Filter> = new Array<Filter>();
    filters.push(new Filter(filterName, this.selectedFilterOptions));
    this.thisDialogRef.close(filters);
  }
}
