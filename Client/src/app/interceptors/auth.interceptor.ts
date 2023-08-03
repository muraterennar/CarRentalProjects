import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.injector.get(AuthService);
    let newRequest: HttpRequest<any>;
    newRequest = request.clone({
      headers: request.headers.set("Authorization", "Bearer " + token.getToken())
    });
    return next.handle(newRequest);
  }


  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   let token = localStorage.getItem("token");
  //   let newRequest: HttpRequest<any>;
  //   newRequest = request.clone({
  //     headers: request.headers.set("Authorization", "Bearer " + token)
  //   });
  //   return next.handle(newRequest);
  // }
}
