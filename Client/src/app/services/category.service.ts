import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category/category';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient, @Inject('baseUrl') private baseUrl: string) { }

  // apiUrl = 'https://localhost:5001/api/';

  private apiUrl = `${this.baseUrl}`;

  getAllCategory(): Observable<ListResponseModel<Category>> {
    let newPath = this.apiUrl + 'Categories/getall';
    return this.httpClient.get<ListResponseModel<Category>>(newPath);
  }

  getCategoryById(id: number): Observable<SingleResponseModel<Category>> {
    let newPath = this.apiUrl + 'Categories/getbyid?id=' + id;
    return this.httpClient.get<SingleResponseModel<Category>>(newPath);
  }
}
