import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '../model/Customer.model';

@Pipe({
  name: 'customerFilter'
})
export class CustomerFilterPipe implements PipeTransform {

  transform(customers: Customer[], id: string, name: string, country: string , phone: string ) {
    if (!id && !name && !country && !phone){
      return customers;
    }else{
      if (id){
        customers = customers.filter(item => {
          return item.id.toString().indexOf(id) !== -1 ;
        });
      }
      if (name){
        customers = customers.filter(item => {
          return item.name.toLowerCase().indexOf(name.toLowerCase()) !== -1 ;
        });
      }
      if (country){
        customers = customers.filter(item => {
          return item.country.toLowerCase().indexOf(country.toLowerCase()) !== -1 ;
        });
        console.log(country);
      }
      if (phone){
        customers = customers.filter(item => {
          return item.phone.toString().indexOf(phone) !== -1 ;
        });
        console.log(phone);
      }
    }
    return customers;
  }

}
