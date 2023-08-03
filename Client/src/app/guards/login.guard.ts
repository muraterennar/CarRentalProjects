import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard {
  /**
   *
   */
  constructor(
    private autheService: AuthService,
    private toastrService: ToastrService,
    private router: Router,
    private jwtHelperService: JwtHelperService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const token: string = localStorage.getItem('token');

    const decodedToken = this.jwtHelperService.decodeToken(token);
    let expiration: boolean;

    try {
      expiration = this.jwtHelperService.isTokenExpired(token);
    } catch {
      expiration = true;
    }

    if (!token || expiration) {
      this.router.navigate(['login'], {
        queryParams: { returnValue: state.url },
      });

      localStorage.clear();
    }
    return true;
  }
}

export enum ClaimType {
  email = 'email',
  exp = 'exp',
  fullName = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
  id = 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier',
}
