import {Component, Inject, Input, OnInit} from '@angular/core';
import {FilterOption} from '../../models/filter-option';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.less']
})
export class FilterOptionsComponent implements OnInit {

  @Input() allFilterOptions: Array<FilterOption>;
  private selectedFilterOptions: Array<FilterOption> = new Array<FilterOption>();

  constructor(public thisDialogRef: MatDialogRef<FilterOptionsComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Array<FilterOption>) {
    this.allFilterOptions = data;
  }

  ngOnInit() {
  }

  selectFilterOption(filterOption: FilterOption) {
    // highlight selected option

    this.selectedFilterOptions.push(filterOption);
  }

  onApply() {
    this.thisDialogRef.close(this.selectedFilterOptions);
  }
  onCancel() {
    this.thisDialogRef.close(this.selectedFilterOptions);
  }
}
