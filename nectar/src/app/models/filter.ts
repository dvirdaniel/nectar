import {FilterOption} from "./filter-option";

export class Filter {
  private _name: string;
  private _options: Array<FilterOption>;

  constructor(name: string, options: Array<FilterOption>) {
    this._name = name;
    this._options = options;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get options(): Array<FilterOption> {
    return this._options;
  }

  set options(value: Array<FilterOption>) {
    this._options = value;
  }
}
