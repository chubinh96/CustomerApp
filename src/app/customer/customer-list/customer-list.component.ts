import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/model/Customer.model';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  public subscription: Subscription;
  customers: Customer[];

  //sort
  sortBy:string = 'id';
  sortByValueId:number = 1;
  sortByValueName:number = 1;
  sortByValueCountry:number = 1;

  //Filter
  idFilter: string;
  nameFilter: string;
  countryFilter: string;
  phoneFilter: string;

  //search
  valueOptionSearch: string;
  valueTextSearch: string;

  constructor(
    private customerService: CustomerService,
    private routeService: Router
  ) { }

  ngOnInit(): void {
    this.subscription = this.customerService.getAll().subscribe(data => {
      this.customers = data;
    });
  }

  onDelete(id: number, name: string){
    if (confirm('Are you sure to delete ' + name)) {
      this.subscription = this.customerService.deleteById(id).subscribe((data: Customer) => {
        this.updateAfterDelete(id);
      });
    }
    else{
      return;
    }
  }

  updateAfterDelete(id: number){
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customers[i].id === id) {
        this.customers.slice(i, 1);
        break;
      }
    }
  }

  sortList(sortBy, sortByValue){
    if (sortBy === 'id'){
      this.sortBy = sortBy;
      this.sortByValueId = -this.sortByValueId;
      this.sortByValueName = 1;
      this.sortByValueCountry = 1;
    }
    if (sortBy === 'name'){
      this.sortBy = sortBy;
      this.sortByValueName = -this.sortByValueName;
      this.sortByValueId = 1;
      this.sortByValueCountry = 1;
    }
    if (sortBy === 'country'){
      this.sortBy = sortBy;
      this.sortByValueCountry = -this.sortByValueCountry;
      this.sortByValueId = 1;
      this.sortByValueName = 1;
    }
  }

  handleSearch(option, text){
    this.valueOptionSearch = option;
    this.valueTextSearch = text;
  }

}