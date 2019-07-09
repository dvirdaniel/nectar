import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Filter} from '../models/filter';
import {FilterOption} from '../models/filter-option';

const DATA_PATH = './assets/data/zFilterOptions.json';

@Injectable({
  providedIn: 'root'
})
export class FiltersDataService {

  private _allFilters: Array<Filter> = new Array<Filter>();

  constructor(private http: HttpClient) {
    this.http.get(DATA_PATH).subscribe((result: any) => {
        Object.entries(result).forEach( f => {
          const name: string = f[0];
          const options: Array<FilterOption> = new Array<FilterOption>();
          Object.values(f[1]).forEach( o => {
            const filterOption: FilterOption = o;
            options.push(filterOption);
          });
          this._allFilters.push(new Filter(name, options));
        });
      },
      (error: any) => {
        console.log('Problem occurred while getting filters data', error);
      }
    );
  }

  get allFilters(): Array<Filter> {
    return this._allFilters;
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
}
