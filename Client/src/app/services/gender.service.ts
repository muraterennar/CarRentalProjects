import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../models/gender';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class GenderService {


  private apiUrl = "https://carrental.muraterennar.net/api/Genders/";
  // private apiUrl = "https://localhost:5001/api/Genders/";

  constructor(
    private httpClient: HttpClient,
  ) { }


  getGenders(): Observable<ListResponseModel<Gender>> {
    let newPath = this.apiUrl + 'getall';
    return this.httpClient.get<ListResponseModel<Gender>>(newPath);
  }
}
