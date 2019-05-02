import { Injectable } from './node_modules/@app/base/core/http/node_modules/@angular/cores/@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from './node_modules/@app/base/core/http/node_modules/@angular/common/httplar/common/http';
import { Observable } from './node_modules/@app/base/core/http/node_modules/rxjsde_modules/rxjs';

import { environment } from './node_modules/@env/environmentenv/environment';

/**
 * Prefixes all requests with `environment.serverUrl`.
 */
@Injectable()
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (!/^(http|https):/i.test(request.url)) {
    //   request = request.clone({ url: environment.serverUrl + request.url });
    // }
    return next.handle(request);
  }
}
