import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';
import { appRoutes } from './app.routes';
import { CustomerService } from './service/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';
import { CustomerSortPipe } from './pipes/customer-sort.pipe';
import { CustomerFindPipe } from './pipes/customer-find.pipe';
import { CustomerFilterPipe } from './pipes/customer-filter.pipe';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';
import { NameFormatPipe } from './pipes/name-format.pipe';

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerFormComponent,
    CustomerListComponent,
    DashboardComponent,
    CustomerSortPipe,
    CustomerFindPipe,
    CustomerFilterPipe,
    PhoneFormatPipe,
    NameFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
