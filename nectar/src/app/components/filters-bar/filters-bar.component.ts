import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FiltersDataService} from '../../data/filters-data.service';
import {Filter} from '../../models/filter';
import {FilterOption} from '../../models/filter-option';
import {DialogPosition, MatDialog} from '@angular/material';
import {FilterOptionsComponent} from '../filter-options/filter-options.component';

@Component({
  selector: 'filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.less']
})
export class FiltersBarComponent implements OnInit {

  private allFilters: Array<Filter> = new Array<Filter>();
  private selectedFilters: Array<Filter> = new Array<Filter>();
  @Output() selectedChange = new EventEmitter();

  constructor(public dialog: MatDialog,
              private filtersDataService: FiltersDataService) {
  }

  ngOnInit() {

    this.filtersDataService.getData().subscribe(
      (result: any) => {
        Object.entries(result).forEach( f => {
          const name: string = f[0];
          const options: Array<FilterOption> = new Array<FilterOption>();
          Object.values(f[1]).forEach( o => {
              const filterOption: FilterOption = o;
              options.push(filterOption);
            });
          this.allFilters.push(new Filter(name, options));
        });
      },
      (error: any) => {
        console.log('Problem occurred while getting filters data', error);
      }
    );
  }

  showOptions(event: any, filter: Filter) {
    const dialogPosition: DialogPosition = {
      top: (event.y + 15) + 'px',
      left: (event.x) + 'px'
    };

    const dialogRef = this.dialog.open(FilterOptionsComponent, {
      position: dialogPosition,
      data: filter.options
    });

    dialogRef.afterClosed().subscribe(result => {
      this.selectedFilters = result;
      this.selectedChange.emit(this.selectedFilters);
    });
  }
}
