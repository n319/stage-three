import { Injectable } from './node_modules/@app/base/api/authentication/node_modules/@angular/cores/@angular/cores/@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from './node_modules/@app/base/api/authentication/node_modules/@angular/common/httplar/common/httplar/common/http';

import { Observable } from './node_modules/@app/base/api/authentication/node_modules/rxjsde_modules/rxjsde_modules/rxjs';

@Injectable()
export class AuthJWTInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser && currentUser.token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`
        }
      });
    }

    return next.handle(req);
  }
}
