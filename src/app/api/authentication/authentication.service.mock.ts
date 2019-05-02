import { Observable, of } from './node_modules/@app/base/api/authentication/node_modules/rxjsde_modules/rxjsde_modules/rxjs';

import { Credentials, LoginContext } from './authentication.service';

export class MockAuthenticationService {
  credentials: Credentials | null = {
    username: 'test',
    token: '123'
  };

  login(context: LoginContext): Observable<Credentials> {
    return of({
      username: context.username,
      token: '123456'
    });
  }

  logout(): Observable<boolean> {
    this.credentials = null;
    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }
}
