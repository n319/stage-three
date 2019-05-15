import { AboutComponent } from './../../about/about.component';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment';
import { AgileHouseUserModel } from '../models/agileHouseUser.model';
import { HttpClient } from '@angular/common/http';

declare var Hashes: any;

export interface Credentials {
  // Customize received credentials here
  username: string;
  token: string;
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}

/**
 * Provides a base for authentication workflow.
 * The Credentials interface as well as login/logout methods should be replaced with proper implementation.
 */
@Injectable()
export class AuthenticationService {
  private _hasher: any;

  private _credentials: AgileHouseUserModel | null;

  constructor(private http: HttpClient) {
    const savedCredentials =
      sessionStorage.getItem(environment.sessionKey.credentials) ||
      localStorage.getItem(environment.sessionKey.credentials);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Authenticates the user.
   * @param loginCredentials The login parameters.
   * @return The user credentials.
   */
  login(username: string, password: string): Observable<AgileHouseUserModel> {
    const url = environment.apiUrl + environment.userApi.login;

    const MD5 = new Hashes.MD5().hex(password);

    const passwordHash = password;
    //!TODO salt hash me

    return this.http.post<AgileHouseUserModel>(url, { username, passwordHash }).pipe(
      map((user: AgileHouseUserModel) => {
        // login successful if there's a jwt token in the response
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          this.setCredentials(user);
          //localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      })
    );
  }

  /**
   * Logs out the user and clear credentials.
   * @return True if the user was logged out successfully.
   */
  logout(): Observable<boolean> {
    // Customize credentials invalidation here
    this.setCredentials();
    return of(true);
  }

  /**
   * Checks is the user is authenticated.
   * @return True if the user is authenticated.
   */
  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Gets the user credentials.
   * @return The user credentials or null if the user is not authenticated.
   */
  get credentials(): AgileHouseUserModel | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   * The credentials may be persisted across sessions by setting the `remember` parameter to true.
   * Otherwise, the credentials are only persisted for the current session.
   * @param credentials The user credentials.
   * @param remember True to remember credentials across sessions.
   */
  private setCredentials(creds?: AgileHouseUserModel, remember?: boolean) {
    this._credentials = creds || null;

    if (creds) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(environment.sessionKey.credentials, JSON.stringify(creds));
    } else {
      sessionStorage.removeItem(environment.sessionKey.credentials);
      localStorage.removeItem(environment.sessionKey.credentials);
    }
  }
}
