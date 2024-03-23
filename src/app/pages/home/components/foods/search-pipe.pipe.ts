import { Pipe, PipeTransform } from '@angular/core';
import { Food } from 'src/app/interfaces/food';

@Pipe({
  name: 'searchPipe',
})
export class SearchPipePipe implements PipeTransform {
  transform(value: Food[], word: string): Food[] {
    let temp: Food[] = value.filter(
      (elm) =>
        elm.title.toLowerCase().includes(word.toLowerCase()) ||
        elm.category.name.toLowerCase().includes(word) ||
        elm.description.toLowerCase().includes(word)
    );

    return temp;
  }
}
