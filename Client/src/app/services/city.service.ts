import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/city';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private apiUrl = this.baseUrl;
  // private apiUrl = "https://localhost:5001/api/Cities/";

  constructor(
    private httpClient: HttpClient,@Inject('baseUrl') private baseUrl: string
  ) { }


  getCities(): Observable<ListResponseModel<City>> {
    let newPath = this.apiUrl + 'Cities/getall';
    return this.httpClient.get<ListResponseModel<City>>(newPath);
  }
}
