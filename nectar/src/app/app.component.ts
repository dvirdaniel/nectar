import {Component} from '@angular/core';
import {FilterOption} from './models/filter-option';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  private appliedFilterOptions: Array<FilterOption> = new Array<FilterOption>();

  displaySelected($event: any) {
    console.log($event);
    this.appliedFilterOptions = $event;
  }
}
