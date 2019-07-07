import {Component, Input, OnInit} from '@angular/core';
import {FilterOption} from '../../models/filter-option';

@Component({
  selector: 'filter-option-selected',
  templateUrl: './filter-option-selected.component.html',
  styleUrls: ['./filter-option-selected.component.less']
})
export class FilterOptionSelectedComponent implements OnInit {
  @Input() private filterOption: FilterOption;

  constructor() { }

  ngOnInit() {
  }

  removeSelected() {

  }
}
