import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/Color/color';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  // apiUrl: "https://localhost:5001/api/Colors/";
  private apiUrl: string = this.baseUrl;




  constructor(
    private httpClient: HttpClient, @Inject('baseUrl') private baseUrl: string
  ) { }


  getColors(): Observable<ListResponseModel<Color>> {
    // let newPath = "https://carrental.muraterennar.net/api/Colors/getall";
    let newPath = `${this.baseUrl}Colors/getall`;
    return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }

  getColor(): Observable<SingleResponseModel<Color>> {
    let newPath = this.apiUrl + "getall";
    return this.httpClient.get<SingleResponseModel<Color>>(newPath);
  }

  addColor(color: Color): Observable<ListResponseModel<ResponseModel>> {
    let newPath = 'https://carrental.muraterennar.net/api/Colors/add';
    // let newPath = 'https://localhost:5001/api/Colors/add';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath, color);
  }

  updateColor(color: Color): Observable<ListResponseModel<ResponseModel>> {
    let newPath = 'https://carrental.muraterennar.net/api/Colors/update'
    // let newPath = 'https://localhost:5001/api/Colors/update'
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath, color);
  }

  deleteColor(color: Color): Observable<ListResponseModel<ResponseModel>> {
    let newPath = 'https://carrental.muraterennar.net/api/Colors/delete';
    // let newPath = 'https://localhost:5001/api/Colors/delete';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(newPath, color);
  }
}
