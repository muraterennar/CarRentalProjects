import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetailModel } from 'src/app/models/customer/customerDetailModel';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  dataLoaded: boolean = false;
  customers: CustomerDetailModel[];

  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
  }



  getCustomers() {
    this.customerService.getCustomerDetails().subscribe((response) => {
      this.customers = response.data;
    })
  }

  backToDashboard() {
    if (localStorage.getItem('dataLoaded') == 'true') {
      this.router.navigate(['/admin']).then(() => {
        window.location.reload();
      });

      localStorage.setItem('dataLoaded', String(this.dataLoaded))
    }
    else {
      localStorage.setItem('dataLoaded', String(this.dataLoaded = true))
    }
  }

}
