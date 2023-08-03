import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand/brand';
import { BrandDetail } from '../models/brand/brandDetails';
import { BrandImage } from '../models/brand/brandImage';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  constructor(
    private httpClient: HttpClient,
    @Inject('baseUrl') private baseUrl: string
  ) {}

  // imageUrl = 'https://localhost:5001/wwwroot/Images/';
  private imageUrl = 'https://carrental.muraterennar.net/';

  private apiUrl = `${this.baseUrl}`;

  /* ================ Brand ================*/
  getBrands(): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/getall';
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrand(): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/getall';
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  getBrandByIds(brandId: number): Observable<ListResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/getbyid?id=' + brandId;
    return this.httpClient.get<ListResponseModel<Brand>>(newPath);
  }

  getBrandById(brandId: number): Observable<SingleResponseModel<Brand>> {
    let newPath = this.apiUrl + 'Brands/getbyid?id=' + brandId;
    return this.httpClient.get<SingleResponseModel<Brand>>(newPath);
  }

  /* ================ Brand Detail ================*/
  getBrandDetails(): Observable<ListResponseModel<BrandDetail>> {
    let newPath = this.apiUrl + 'Brands/getallbranddetails';
    return this.httpClient.get<ListResponseModel<BrandDetail>>(newPath);
  }

  getBrandDetail(): Observable<SingleResponseModel<BrandDetail>> {
    let newPath = this.apiUrl + 'Brands/getallbranddetails';
    return this.httpClient.get<SingleResponseModel<BrandDetail>>(newPath);
  }

  getBrandDetailsByIds(
    brandId: number
  ): Observable<ListResponseModel<BrandDetail>> {
    let newPath =
      this.apiUrl + 'Brands/getbranddetailbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<BrandDetail>>(newPath);
  }

  getBrandDetailsById(
    brandId: number
  ): Observable<SingleResponseModel<BrandDetail>> {
    let newPath =
      this.apiUrl + 'Brands/getbranddetailbybrandid?brandId=' + brandId;
    return this.httpClient.get<SingleResponseModel<BrandDetail>>(newPath);
  }

  getBrandDetailsByImageIds(
    imageId: number
  ): Observable<ListResponseModel<BrandDetail>> {
    let newPath =
      this.apiUrl + 'Brands/getbranddetailbyimageid?imageId=' + imageId;
    return this.httpClient.get<ListResponseModel<BrandDetail>>(newPath);
  }

  getBrandDetailsByImageId(
    imageId: number
  ): Observable<SingleResponseModel<BrandDetail>> {
    let newPath =
      this.apiUrl + 'Brands/getbranddetailbyimageid?imageId=' + imageId;
    return this.httpClient.get<SingleResponseModel<BrandDetail>>(newPath);
  }

  /* ================ Brand Post ================*/

  brandAdd(brand: Brand): Observable<ListResponseModel<ResponseModel>> {
    let newPath = this.apiUrl + 'Brands/add';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(
      newPath,
      brand
    );
  }

  brandUpdate(brand: Brand): Observable<ListResponseModel<ResponseModel>> {
    let newPath = this.apiUrl + 'Brands/update';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(
      newPath,
      brand
    );
  }

  brandDelete(brand: Brand): Observable<ListResponseModel<ResponseModel>> {
    let newPath = this.apiUrl + 'Brands/delete';
    return this.httpClient.post<ListResponseModel<ResponseModel>>(
      newPath,
      brand
    );
  }

  /* ================ Brand Image ================*/

  getBrandImages(): Observable<ListResponseModel<BrandImage>> {
    let newPath = this.apiUrl + 'BrandImages/getall';
    return this.httpClient.get<ListResponseModel<BrandImage>>(newPath);
  }

  getBrandImage(): Observable<SingleResponseModel<BrandImage>> {
    let newPath = this.apiUrl + 'BrandImages/getall';
    return this.httpClient.get<SingleResponseModel<BrandImage>>(newPath);
  }

  getBrandImageById(id: number): Observable<ListResponseModel<BrandImage>> {
    let newPath = this.apiUrl + 'BrandImages/getbyimageid?imageId=' + id;
    return this.httpClient.get<ListResponseModel<BrandImage>>(newPath);
  }

  getBrandImageByBrandId(
    brandId: number
  ): Observable<ListResponseModel<BrandImage>> {
    let newPath = this.apiUrl + 'BrandImages/getbybrandid?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<BrandImage>>(newPath);
  }

  getBrandImageByImagePath(
    imagePath: string
  ): Observable<ListResponseModel<BrandImage>> {
    let newPath =
      this.apiUrl + 'BrandImages/getbyimagepath?imagePath=' + imagePath;
    return this.httpClient.get<ListResponseModel<BrandImage>>(newPath);
  }

  getImagePath(imagePath: string) {
    let newPath = this.imageUrl + imagePath;
    return newPath;
  }
}
