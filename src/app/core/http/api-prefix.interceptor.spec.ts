import { TestBed, inject } from './node_modules/@app/base/core/http/node_modules/@angular/core/testingar/core/testing';
import { HttpClientTestingModule, HttpTestingController } from './node_modules/@app/base/core/http/node_modules/@angular/common/http/testingon/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from './node_modules/@app/base/core/http/node_modules/@angular/common/httplar/common/http';

import { environment } from './node_modules/@env/environmentenv/environment';
import { ApiPrefixInterceptor } from './api-prefix.interceptor';

describe('ApiPrefixInterceptor', () => {
  let http: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ApiPrefixInterceptor,
          multi: true
        }
      ]
    });
  });

  beforeEach(inject([HttpClient, HttpTestingController], (_http: HttpClient, _httpMock: HttpTestingController) => {
    http = _http;
    httpMock = _httpMock;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should prepend environment.serverUrl to the request url', () => {
    // Act
    http.get('/toto').subscribe();

    // Assert
    httpMock.expectOne({ url: environment.serverUrl + '/toto' });
  });

  it('should not prepend environment.serverUrl to request url', () => {
    // Act
    http.get('hTtPs://domain.com/toto').subscribe();

    // Assert
    httpMock.expectOne({ url: 'hTtPs://domain.com/toto' });
  });
});
