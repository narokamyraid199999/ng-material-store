import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutPipe',
})
export class CutPipePipe implements PipeTransform {
  transform(value: string, numOfWords: number): string {
    let temp = '';
    temp = value.split(' ').splice(0, numOfWords).join(' ');
    return temp;
  }
}
