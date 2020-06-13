import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        if (!req.headers.has("Authentication")) {
            return next.handle(req.clone({
                setHeaders: {
                    'AuthenticationToken': 'Bearer ' + this.authService.accessToken,
                    'Content-Type': 'application/json',
                     Accept: 'application/json, text/plain, */*'
                }
            }));
        }
        else {
            return next.handle(req);
        }
    }
}
