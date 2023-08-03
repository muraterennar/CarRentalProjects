import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';
import { SingleResponseModel } from '../models/singleResponseModel';
import { UserDetail } from '../models/user/UserDetail';
import { UserEditProfile } from '../models/user/userEditProfile';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl: string = 'https://carrental.muraterennar.net/api/Users/';
  private imageUrl: string = 'https://carrental.muraterennar.net/wwwroot/Images/';
  // private apiUrl: string = 'https://localhost:5001/api/Users/';
  // private imageUrl: string = 'https://localhost:5001/wwwroot/Images/';

  constructor(private httpClient: HttpClient) {}

  getUserDetails(): Observable<ListResponseModel<UserDetail>> {
    let newPath: string = this.apiUrl + 'getuserdetails';
    return this.httpClient.get<ListResponseModel<UserDetail>>(newPath);
  }

  getUserDetail(): Observable<SingleResponseModel<UserDetail>> {
    let newPath = this.apiUrl + 'getuserdetails';
    return this.httpClient.get<SingleResponseModel<UserDetail>>(newPath);
  }

  getUserDetailsByUserId(
    userId: number
  ): Observable<ListResponseModel<UserDetail>> {
    let newPath: string = this.apiUrl + 'getuserdetailsbyid?userId=' + userId;
    return this.httpClient.get<ListResponseModel<UserDetail>>(newPath);
  }

  getUserDetailByUserId(
    userId: number
  ): Observable<SingleResponseModel<UserDetail>> {
    let newPath: string = this.apiUrl + 'getuserdetailsbyid?userId=' + userId;
    return this.httpClient.get<SingleResponseModel<UserDetail>>(newPath);
  }

  getUserDetailsByEmail(
    email: string
  ): Observable<ListResponseModel<UserDetail>> {
    let newPath: string = this.apiUrl + 'getuserdetailsbyemail?email=' + email;
    return this.httpClient.get<ListResponseModel<UserDetail>>(newPath);
  }

  getUserDetailByEmail(
    email: string
  ): Observable<SingleResponseModel<UserDetail>> {
    let newPath: string = this.apiUrl + 'getuserdetailsbyemail?email=' + email;
    return this.httpClient.get<SingleResponseModel<UserDetail>>(newPath);
  }

  getUserImage(imagePath: string) {
    var result = this.imageUrl + imagePath;
    return result;
  }

  userEdit(user: UserEditProfile): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'update', user);
  }
}
