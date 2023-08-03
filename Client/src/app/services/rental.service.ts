import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { RentalDetailModel } from '../models/rental/rentalDetail';
import { RentalModel } from '../models/rental/rentalModel';
import { Rentals } from '../models/rental/rentals';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  private apiUrl = "https://carrental.muraterennar.net/api/Rentals/";
  // private apiUrl = "https://localhost:5001/api/Rentals/";
  rentingCar: RentalModel;

  constructor(private httpClient: HttpClient) {
    this.getall();
  }

  getall(): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<ListResponseModel<RentalModel>>(newPath);
  }

  getDetailsAll(): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getrentaldetails";
    return this.httpClient.get<ListResponseModel<RentalModel>>(newPath);
  }

  getDetailAll(): Observable<ListResponseModel<Rentals>> {
    let newPath = this.apiUrl + "getrentaldetails";
    return this.httpClient.get<ListResponseModel<Rentals>>(newPath);
  }

  getDetailsByCustomer(customerId: number): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getrentaldetailbycustomer?customerId=" + customerId;
    return this.httpClient.get<ListResponseModel<RentalModel>>(newPath);
  }

  getDetailsByCar(carId: number): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getrentaldetailbycar?carId=" + carId;
    return this.httpClient.get<ListResponseModel<RentalModel>>(newPath);
  }

  getDetailByCar(carId: number): Observable<SingleResponseModel<RentalDetailModel>> {
    let newPath = this.apiUrl + "getrentaldetailbycar?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<RentalDetailModel>>(newPath);
  }

  getDetailsByCarId(carId: number): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getrentalbycar?carId=" + carId;
    return this.httpClient.get<ListResponseModel<RentalModel>>(newPath);
  }

  getDetailByCarId(carId: number): Observable<SingleResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getrentalbycar?carId=" + carId;
    return this.httpClient.get<SingleResponseModel<RentalModel>>(newPath);
  }

  getRentalById(id: number): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "getrentalbyid?id=" + id;
    return this.httpClient.get<ListResponseModel<RentalModel>>(newPath);
  }

  setRentingCar(rental: RentalModel) {
    this.rentingCar = rental;
  }

  getRentingCar() {
    return this.rentingCar;
  }

  rentalAdd(rental: Partial<RentalModel>): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "add";
    return this.httpClient.post<ListResponseModel<RentalModel>>(newPath, rental);
  }

  rentalDelete(rental: RentalModel): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "delete";
    return this.httpClient.post<ListResponseModel<RentalModel>>(newPath, rental);
  }

  rentalUpdate(rental: RentalModel): Observable<ListResponseModel<RentalModel>> {
    let newPath = this.apiUrl + "update";
    return this.httpClient.post<ListResponseModel<RentalModel>>(newPath, rental);
  }
}
