import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '@env/environment';

@Injectable()
export class AuthJWTInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = JSON.parse(sessionStorage.getItem(environment.sessionKey.credentials));
    
    if (currentUser && currentUser.token) {
      return next.handle(
        req.clone({
          setHeaders: {
            Authorization: `Bearer ${currentUser.token}`
          }
        })
      );
    }

    return next.handle(req);
  }
}
