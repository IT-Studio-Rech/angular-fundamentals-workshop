import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filterProducts',
})
export class FilterProductsPipe implements PipeTransform {
  transform(products: any[], name: string, tags: string[]): any[] {
    if (!products) {
      return [];
    }
    if (!name && (!tags || tags.length === 0)) {
      return products;
    }

    return products.filter((product) => {
      let nameMatch = true;
      let tagMatch = true;

      if (name) {
        nameMatch = product.name.toLowerCase().includes(name.toLowerCase());
      }

      if (tags && tags.length > 0) {
        tagMatch = tags.every((tag) => product.tags.includes(tag));
      }

      return nameMatch && tagMatch;
    });
  }
}
