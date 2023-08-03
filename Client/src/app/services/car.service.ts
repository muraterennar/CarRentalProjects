import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car/car';
import { CarDetail } from '../models/car/carDetail';
import { CarImage } from '../models/car/carImage';
import { CarImageAdd } from '../models/car/carImageAdd';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private httpClient: HttpClient, @Inject('baseUrl') private baseUrl: string,) { }

  // apiUrl = 'https://localhost:5001/api/';
  // imageUrl = 'https://localhost:5001/wwwroot/Images/';
  private apiUrl = `${this.baseUrl}`;
  private imageUrl = 'https://carrental.muraterennar.net/';

  /* ===================== Car ===================== */
  getCars(): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCar(): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getall';
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getCarByIds(id: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarById(id: number): Observable<SingleResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Car>>(newPath);
  }

  getCarByBrandId(brandId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + 'Cars/getbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  /* ================ Car Detail ================ */

  getCarDetail(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'Cars/getcardetail';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailsByCarId(carId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'Cars/getcardetailbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
  getCarDetailByCarId(carId: number): Observable<SingleResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'Cars/getcardetailbycarid?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByBrandId(brandId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'Cars/getcardetailbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByColorId(colorId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'Cars/getcardetailbycolorid?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByImageId(imageId: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'getcardetailbyimageid?imageId=' + imageId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  /* ================ Car Post ================ */

  carAdd(car: Car): Observable<ListResponseModel<ResponseModel>> {
    let newPath = this.apiUrl + 'Cars/add';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath, car);
  }

  carUpdate(car: Car): Observable<ListResponseModel<ResponseModel>> {
    let newPath = this.apiUrl + 'Cars/update';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath, car);
  }

  carDelete(car: Car): Observable<ListResponseModel<ResponseModel>> {
    let newPath = this.apiUrl + 'Cars/delete';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath, car);
  }

  carImageAdd(carId:number, imagePath:string): Observable<ListResponseModel<ResponseModel>> {
    let newPath = "https://localhost:44368/api/CarImages/add";
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath,carId + imagePath );
  }

  /* ================ Car Image ================ */
  getCarImageAll(): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getall';
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImageById(id: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getbyid?id=' + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImageByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getbycarid?carId=' + carId;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImageByImagePath(imagePath: string): Observable<ListResponseModel<CarImage>> {
    let newPath = this.apiUrl + 'CarImages/getbyimagepath?imagePath=' + imagePath;
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
  }

  getCarImage(imagePath: string) {
    var result = this.imageUrl + imagePath;
    return result;
  }
}
