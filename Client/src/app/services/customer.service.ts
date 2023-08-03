import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerDetailModel } from '../models/customer/customerDetailModel';
import { CustomerModel } from '../models/customer/customerModel';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  // apiUrl = "https://localhost:5001/api/Customers/";
  apiUrl = "https://carrental.muraterennar.net/api/Customers/";
  currentCustomer: CustomerDetailModel;
  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<ListResponseModel<CustomerModel>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<CustomerModel>>(newPath);
  }

  getCustomerDetails(): Observable<ListResponseModel<CustomerDetailModel>> {
    let newPath = this.apiUrl + "getcustomerdetails";
    return this.httpClient.get<ListResponseModel<CustomerDetailModel>>(newPath);
  }

  getCustomerDetailsById(id: number): Observable<ListResponseModel<CustomerDetailModel>> {
    let newPath = this.apiUrl + 'getcustomerdetailbyid?customerId=' + id;
    return this.httpClient.get<ListResponseModel<CustomerDetailModel>>(newPath);
  }

  setCustomer(customer: CustomerDetailModel) {
    this.currentCustomer = customer;
  }

  getCustomer(): CustomerDetailModel {
    return this.currentCustomer;
  }

  getCustomersByEmail(email: string): Observable<ListResponseModel<CustomerDetailModel>> {
    let newPayh = this.apiUrl + "getcustomerbyemail?email=" + email;
    return this.httpClient.get<ListResponseModel<CustomerDetailModel>>(newPayh);
  }

  getCustomerByEmail(email: string): Observable<SingleResponseModel<CustomerDetailModel>> {
    let newPayh = this.apiUrl + "getcustomerbyemail?email=" + email;
    return this.httpClient.get<SingleResponseModel<CustomerDetailModel>>(newPayh);
  }
}
