import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../model/Customer.model';

@Pipe({
  name: 'customerFind'
})
export class CustomerFindPipe implements PipeTransform {

  transform(customers: Customer[], valueOption: string, valueText: string) {
    if (!valueText && valueText === ''){
      return customers;
    }else{
      if (valueOption === 'id'){
        customers = customers.filter(item => {
          return item.id.toString().indexOf(valueText) !== -1 ;
        });
      }
      if (valueOption === 'name'){
        customers = customers.filter(item => {
          return item.name.toLowerCase().indexOf(valueText.toLowerCase()) !== -1 ;
        });
      }
      if (valueOption === 'country'){
        customers = customers.filter(item => {
          return item.country.toLowerCase().indexOf(valueText.toLowerCase()) !== -1 ;
        });
      }
      if (valueOption === 'phone'){
        customers = customers.filter(item => {
          return item.phone.toString().indexOf(valueText) !== -1 ;
        });
      }
    }
    return customers;
  }

}
