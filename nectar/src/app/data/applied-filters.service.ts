import {Injectable} from '@angular/core';
import {FilterOption} from '../models/filter-option';
import {Filter} from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class AppliedFiltersService {

  private _appliedFilterOptions: Map<string, Array<FilterOption>>;

  constructor() {
    this._appliedFilterOptions = new Map<string, Array<FilterOption>>();
  }

  get appliedFilterOptions(): Map<string, Array<FilterOption>> {
    return this._appliedFilterOptions;
  }

  public getFilterOptionsByFilterName(filterName: string): Array<FilterOption> {
    return this._appliedFilterOptions.get(filterName);
  }

  public getAllFilterOptions(): Array<FilterOption> {
    const allAppliedFilterOptions = new Array<FilterOption>();
    Array.from(this._appliedFilterOptions.values()).forEach(value => value.forEach( v => {
      if (allAppliedFilterOptions.indexOf(v) === -1) {
        allAppliedFilterOptions.push(v);
      }
    }));
    return allAppliedFilterOptions;
  }

  public addFilterOption(filterName: string, filterOption: FilterOption) {
    if (!this._appliedFilterOptions.has(filterName)) {
      this._appliedFilterOptions.set(filterName, new Array<FilterOption>());
    }

    let filterOptions: Array<FilterOption> = this._appliedFilterOptions.get(filterName);

    if (!filterOptions) {
      filterOptions = new Array<FilterOption>();
    }

    if (filterOptions.indexOf(filterOption) === -1) {
      filterOptions.push(filterOption);
    }
  }

  public addFilterOptionArray(filters: Array<Filter>) {
    filters.forEach( f => {
      const filterName = f.name;
      f.options.forEach( o => {
          this.addFilterOption(filterName, o);
        }
      );
    });
  }

  public removeFilterOption(filterOption: FilterOption) {
    this._appliedFilterOptions.forEach((v,k) => {
      const newFilterOptions = v.filter( val => { return val.id !== filterOption.id; });
      if (newFilterOptions.length === 0) {
        this._appliedFilterOptions.delete(k);
      } else {
        this._appliedFilterOptions.set(k, newFilterOptions);
      }
    });
  }

  public clearAll() {
    this._appliedFilterOptions.clear();
  }

  isEmpty(): boolean {
    return this._appliedFilterOptions.size > 0 ? false : true;
  }
}
