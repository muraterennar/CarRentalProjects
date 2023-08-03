import { Injectable } from '@angular/core';
import { CustomerDetailModel } from '../models/customer/customerDetailModel';
import { CustomerModel } from '../models/customer/customerModel';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  currentCustomer: string = 'currentCustomer';
  customer: string = 'customer';
  currentEmail: string;
  tokenKey = 'token';

  constructor() { }

  getItem(key: string) {
    return localStorage.getItem(key);
  }

  addItem(key: string, value: string) {
    return localStorage.setItem(key, value);
  }

  removeItem(key: string) {
    return localStorage.removeItem(key)
  }

  clear() {
    return localStorage.clear();
  }

  get isLocalStorageSupported(): boolean {
    return !!localStorage;
  }

  getCurrentCustomer(): CustomerDetailModel {
    return JSON.parse(localStorage.getItem(this.currentCustomer));
  }

  getCustomer(): CustomerDetailModel {
    return JSON.parse(localStorage.getItem(this.customer));
  }

  setCurrentCustomer(customer: CustomerDetailModel) {
    localStorage.setItem(this.currentCustomer, customer.email);
  }

  setCustomer(customer: CustomerModel) {
    localStorage.setItem(this.customer, JSON.stringify(customer.id))
  }
  setEmail(email: string) {
    localStorage.setItem(this.currentEmail, email);
  }

  removeCurrentCustomer() {
    localStorage.removeItem(this.currentCustomer);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }
}
