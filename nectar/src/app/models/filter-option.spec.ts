import { FilterOption } from './filter-option';

describe('FilterOption', () => {
  it('should create an instance', () => {
    expect(new FilterOption('id', 'title')).toBeTruthy();
  });
});
