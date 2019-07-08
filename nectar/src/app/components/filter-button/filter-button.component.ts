import {Component, Input, OnInit} from '@angular/core';
import {FilterOption} from '../../models/filter-option';

@Component({
  selector: 'filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.less']
})
export class FilterButtonComponent implements OnInit {
  @Input() private name: string;
  @Input() private options: Array<FilterOption>;
  @Input() private selected: number;
  @Input() private clicked: boolean;

  constructor() { }

  ngOnInit() {
  }
}
