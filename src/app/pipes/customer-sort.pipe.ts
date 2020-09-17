import { Pipe, PipeTransform } from '@angular/core';
import { from } from 'rxjs';
import { Customer } from '../model/Customer.model';
import { CustomerService } from '../service/customer.service';
import { orderBy } from 'lodash';

@Pipe({
  name: 'customerSort'
})
export class CustomerSortPipe implements PipeTransform {

  transform(customers: Customer[], sortBy: string, sortById: number, sortByName: number, sortByCountry) {
    if (customers !== undefined){
      if (sortBy === 'id'){
        customers.sort((a, b) => {
          if (Number(a.id) > Number(b.id)) { return sortById; }
          if (Number(a.id) < Number(b.id)) { return -sortById; }
          else { return 0; }
        });
      }
      if (sortBy === 'name'){
        customers = orderBy(customers, ['name'], [sortByName === 1 ? 'asc' : 'desc']);
      }
      if (sortBy === 'country'){
        console.log(sortBy + ' _  ' + sortByCountry) ;
        customers = orderBy(customers, ['country'], [sortByCountry === 1 ? 'asc' : 'desc']);
      }
    }
    return customers;
  }

}
