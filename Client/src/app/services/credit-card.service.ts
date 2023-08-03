import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreditCard } from '../models/creditCard/creditCard';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CreditCardService {
  // private apiUrl: string = "https://localhost:5001/api/CreditCardPayments/";
  private apiUrl: string = `${this.baseUrl}CreditCardPayments/`;

  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  getAllCreditCards(): Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'getAll';
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }

  payment(
    creditCard: CreditCard
  ): Observable<ListResponseModel<ResponseModel>> {
    // let newPath = 'https://localhost:5001/api/CreditCardPayments/payment';
    let newPath =
      'https://carrental.muraterennar.net/api/CreditCardPayments/payment';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(
      newPath,
      creditCard
    );
  }

  paymentByCardAdded(
    creditCard: CreditCard
  ): Observable<ListResponseModel<ResponseModel>> {
    // let newPath = 'https://localhost:5001/api/CreditCardPayments/payment/add';
    let newPath =
      'https://carrental.muraterennar.net/api/CreditCardPayments/payment/add';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(
      newPath,
      creditCard
    );
  }

  deleteCreditCard(
    creditCard: CreditCard
  ): Observable<ListResponseModel<ResponseModel>> {
    // let newPath = 'https://localhost:5001/api/CreditCardPayments/delete'
    let newPath =
      'https://carrental.muraterennar.net/api/CreditCardPayments/delete';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(
      newPath,
      creditCard
    );
  }

  getCreditCards(id: number): Observable<ListResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CreditCard>>(newPath);
  }

  getCreditCard(id: number): Observable<SingleResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<CreditCard>>(newPath);
  }

  getCreditCardByCustomer(
    customerId: number
  ): Observable<SingleResponseModel<CreditCard>> {
    let newPath = this.apiUrl + 'getbycustomerid?customerId=' + customerId;
    return this.httpClient.get<SingleResponseModel<CreditCard>>(newPath);
  }
}
