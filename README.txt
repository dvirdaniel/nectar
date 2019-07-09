Documentation:
I used Angular 8 with Angular Material (for the dialog and expansion panel)

Data Structure:
Filter - A class that saves a filter with his name and options.
Filter Option - A class that saves a filter option with his id and title.

Services:
FiltersDataService - A singleton service that reads the given json file and return the array of filters located inside the file.
AppliedFiltersService - A singleton service that saves the applied filters so each component that needs to know which filters applied can use it.

Components:
AppliedFiltersComponent - A component that handles the applied filters section.
FilterButtonComponent - A component that handles the filter button.
FilterOptionsComponent - A component that handles the filter option button (used as a modal dialog).
FiltersBarComponent - A component that handles the filter bar (the area where all filter buttons are located).
LogoComponent - A component that handles the logo display.
MoreFiltersComponent - A component that handles the more filters section (display only on mobile and used as a modal dialog).

Decisions:
1. I decided to split the task to different areas according to the give screen and create a component to each section.
2. I decided to create 2 services: one to handle the data and another to handle the state of the selected filters.
3. I decied not to make an emphasize on the design (it is not so pretty).