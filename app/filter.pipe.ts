import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => {
      // Customize this logic based on your data structure
      return (
        item.firstName.toLowerCase().includes(searchText) ||
        item.lastName.toLowerCase().includes(searchText) ||
        item.city.toLowerCase().includes(searchText) ||
        item.state.toLowerCase().includes(searchText)
      );
    });
  }

}
