import { Pipe, PipeTransform } from '@angular/core';
import { result } from 'lodash';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(name: string) {
    let names = name.toLowerCase().split(' ');
    let result = '';
    for (let i = 0; i < names.length; i++) {
      names[i] = names[i].charAt(0).toUpperCase() + names[i].substring(1);
      result += names[i] + ' ' ;
    }
    return result;
  }

}
