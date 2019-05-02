import { Injectable } from './node_modules/@app/base/core/http/node_modules/@angular/cores/@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from './node_modules/@app/base/core/http/node_modules/@angular/common/httplar/common/http';
import { Observable } from './node_modules/@app/base/core/http/node_modules/rxjsde_modules/rxjs';
import { catchError } from './node_modules/@app/base/core/http/node_modules/rxjs/operators/rxjs/operators';

import { environment } from './node_modules/@env/environmentenv/environment';
import { Logger } from '../logger.service';

const log = new Logger('ErrorHandlerInterceptor');

/**
 * Adds a default error handler to all requests.
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    if (!environment.production) {
      // Do something with the error
      log.error('Request error', response);
    }
    throw response;
  }
}
