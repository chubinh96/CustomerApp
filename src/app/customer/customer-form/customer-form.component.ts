import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerService } from '../../service/customer.service';
import { Customer } from '../../model/Customer.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  title = '';
  currentCustomer: Customer = new Customer();
  subscription: Subscription;
  subscriptionParams: Subscription;
  customerModelId = 0;
  constructor(
    private customerService: CustomerService,
    private routeService: Router,
    private activeRouteService: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.subscriptionParams = this.activeRouteService.paramMap.subscribe(params => {
      let id = params.get("id");
      this.customerModelId = Number(id);
      this.subscription = this.customerService.getById(this.customerModelId).subscribe((data: Customer) => {
        this.currentCustomer = data;
      });

      if (!this.customerModelId || this.customerModelId === 0){
        this.title = 'Add';
      }else{
        this.title = 'Edit';
      }
    });
  }

  onAdd(){
    this.subscription = this.customerService.addNew(this.currentCustomer).subscribe(data => {
      this.routeService.navigateByUrl('customer');
    });
  }

  onUpdate(){
    if (confirm('Are you sure to update ' + this.currentCustomer.name)){
      this.subscription = this.customerService.updateById(this.customerModelId, this.currentCustomer).subscribe((data: Customer) => {
        this.routeService.navigateByUrl('customer');
      });
    }else{
      return;
    }

  }

  onSubmit(){
    if (!this.customerModelId || this.customerModelId === 0){
      this.onAdd();
    }else{
      this.onUpdate();
    }
  }

}
