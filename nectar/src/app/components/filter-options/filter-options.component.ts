import {Component, Inject, OnInit} from '@angular/core';
import {FilterOption} from '../../models/filter-option';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AppliedFiltersService} from '../../data/applied-filters.service';
import {Filter} from '../../models/filter';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.less']
})
export class FilterOptionsComponent implements OnInit {

  private allFilterOptions: Array<FilterOption>;
  private selectedFilterOptions: Array<FilterOption> = new Array<FilterOption>();

  constructor(private appliedFiltersService: AppliedFiltersService,
              public thisDialogRef: MatDialogRef<FilterOptionsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Filter) {
    this.allFilterOptions = data.options;
    const filterOptions = this.appliedFiltersService.getFilterOptionsByFilterName(data.name);
    if (filterOptions) {
      filterOptions.forEach(fo => {this.selectedFilterOptions.push(fo); });
    }
  }

  ngOnInit() {
  }

  selectFilterOption(filterOption: FilterOption) {
    this.selectedFilterOptions.push(filterOption);
  }

  onApply() {
    this.thisDialogRef.close(this.selectedFilterOptions);
  }
  onCancel() {
    this.thisDialogRef.close();
  }

  isSelected(filterOption: FilterOption): boolean {
    return this.selectedFilterOptions.indexOf(filterOption) === -1 ? false : true;
  }
}
