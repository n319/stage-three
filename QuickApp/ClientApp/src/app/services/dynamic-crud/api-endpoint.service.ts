import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';
import { EndpointBase } from '../endpoint-base.service';
import { ConfigurationService } from '../configuration.service';
import { environment } from '../../../environments/environment.prod';


@Injectable()
export class ApiEndpoint extends EndpointBase {

    private readonly _usersUrl: string = '/api/account/users';
    private readonly _userByUserNameUrl: string = '/api/account/users/username';
    private readonly _currentUserUrl: string = '/api/account/users/me';
    private readonly _currentUserPreferencesUrl: string = '/api/account/users/me/preferences';
    private readonly _unblockUserUrl: string = '/api/account/users/unblock';
    private readonly _rolesUrl: string = '/api/account/roles';
    private readonly _roleByRoleNameUrl: string = '/api/account/roles/name';
    private readonly _permissionsUrl: string = '/api/account/permissions';

    get usersUrl() { return this.configurations.baseUrl + this._usersUrl; }
    get userByUserNameUrl() { return this.configurations.baseUrl + this._userByUserNameUrl; }
    get currentUserUrl() { return this.configurations.baseUrl + this._currentUserUrl; }
    get currentUserPreferencesUrl() { return this.configurations.baseUrl + this._currentUserPreferencesUrl; }
    get unblockUserUrl() { return this.configurations.baseUrl + this._unblockUserUrl; }
    get rolesUrl() { return this.configurations.baseUrl + this._rolesUrl; }
    get roleByRoleNameUrl() { return this.configurations.baseUrl + this._roleByRoleNameUrl; }
    get permissionsUrl() { return this.configurations.baseUrl + this._permissionsUrl; }



    getAPIEndpoint<T>(apiRoute: string, query?: string): Observable<T> {
        const endpointUrl = apiRoute;

        let params = new HttpParams();
        if (query) {
            params = this.createSearchParams(query);
        }

        return this.http.get<T>(endpointUrl, { headers: this.requestHeaders, params: params }).pipe<T>(
            catchError(error => {
                return this.handleError(error, () => this.getAPIEndpoint(endpointUrl));
            }));
    }


    constructor(private configurations: ConfigurationService, http: HttpClient, authService: AuthService) {
        super(http, authService);
    }

    private createSearchParams(query: string): HttpParams {
        let newParams = new HttpParams;

        if (typeof query === 'string') {
            let searchParams = new HttpParams();
            const splitQuery = query.split('&');
            splitQuery.forEach(param => {
                const keyValPair = param.split('=');
                searchParams = searchParams.set(keyValPair[0], keyValPair[1]);
            });
            newParams = searchParams;
        //} else if (query instanceof HttpParams) {
        //    newParams = query;
        } else { // Parse object into HttpParams
            Object.keys(query).forEach((key) => {
                newParams = newParams.set(key, query[key]);
            });
        }

        return newParams;
    }

}
