import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value) {
    var viewVal = value.trim().replace(/^\+/, '');
    var area, numberAfter, phoneNumber;
    area = viewVal.slice(0, 3);
    numberAfter = viewVal.slice(3);
    if (viewVal.length > 3) {
      if (numberAfter.length > 3){
        numberAfter = numberAfter.slice(0, 3) + ' ' + numberAfter.slice(3, 6);
        phoneNumber = '(' + area + ') ' +  numberAfter;
      }else{
        phoneNumber = '(' + area + ')' + numberAfter;
      }
    }
    else{
      phoneNumber = area;
    }
    return phoneNumber;
  }
}
