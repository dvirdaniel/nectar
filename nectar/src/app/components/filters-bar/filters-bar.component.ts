import {Component, OnInit} from '@angular/core';
import {FiltersDataService} from '../../data/filters-data.service';
import {Filter} from '../../models/filter';
import {FilterOption} from '../../models/filter-option';
import {DialogPosition, MatDialog, MatDialogConfig} from '@angular/material';
import {FilterOptionsComponent} from '../filter-options/filter-options.component';
import {AppliedFiltersService} from '../../data/applied-filters.service';
import {MoreFiltersComponent} from '../more-filters/more-filters.component';

@Component({
  selector: 'filters-bar',
  templateUrl: './filters-bar.component.html',
  styleUrls: ['./filters-bar.component.less']
})
export class FiltersBarComponent implements OnInit {

  private allFilters: Array<Filter> = new Array<Filter>();
  private clickedFilter: Filter;

  constructor(public dialog: MatDialog,
              private appliedFiltersService: AppliedFiltersService,
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

  wasClicked(filter: Filter) {
    let wasClicked = false;
    if (this.clickedFilter) {
      wasClicked = this.clickedFilter.name === filter.name;
    }
    return wasClicked;
  }

  showOptions(event: any, filter: Filter) {
    this.clickedFilter = filter;

    const dialogPosition: DialogPosition = {
      top: (event.y + 15) + 'px',
      left: (event.x) + 'px'
    };

    const dialogConfig: MatDialogConfig = {};
    dialogConfig.data = filter;
    dialogConfig.position = dialogPosition;

    if (window.innerWidth < 650) {
      dialogConfig.width = '100%';
      dialogConfig.maxWidth = '100%';
    }

    const dialogRef = this.dialog.open(FilterOptionsComponent, dialogConfig);

    dialogRef.afterClosed().subscribe( (result: Array<FilterOption>) => {
      if (result) {
        result.forEach(fo => {
          this.appliedFiltersService.addFilterOption(filter.name, fo);
        });
      }
      this.clickedFilter = null;
    });
  }

  getSelectedCount(filter: Filter) {
    if (this.appliedFiltersService.isEmpty()) {
      return 0;
    }
    const filterOptions = this.appliedFiltersService.getFilterOptionsByFilterName(filter.name);
    return filterOptions ? filterOptions.length : 0;
  }

  getMoreFilters(): Array<Filter> {
    const moreFilters: Array<Filter> = new Array<Filter>();
    this.allFilters.forEach( (f, i) => {
      if (i > 1) {
        moreFilters.push(f);
      }
    });
    return moreFilters;
  }

  showMoreFilters(event) {
    const dialogRef = this.dialog.open(MoreFiltersComponent, {
      position: {
        top: (event.y + 15) + 'px',
      },
      maxWidth: '100%',
      width: '100%',
      maxHeight: '100%',
      height: '80%',
      data: this.getMoreFilters()
    });

    dialogRef.afterClosed().subscribe( (result: Array<Filter>) => {
      if (result) {
        result.forEach(fo => {
          this.appliedFiltersService.addFilterOptionArray(result);
        });
      }
      this.clickedFilter = null;
    });
  }
}
