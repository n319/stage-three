import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AgileHouseUserModel, ProjectSummary } from './models/agileHouseUser.model';
import { environment } from '@env/environment';
import { map } from 'lodash';
import { UserProjectsSummaryResponse } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  /**
   * Authenticates the user - IN api/authentication/authentication.service
   * login(username: string, password: string): Observable<AgileHouseUserModel> {}
   **/

  public GetUserProjectsSummary(): Observable<UserProjectsSummaryResponse> {
    const userId = (JSON.parse(sessionStorage.getItem(environment.sessionKey.credentials)) as AgileHouseUserModel).id;

    const url = environment.apiUrl + environment.userApi.projectsSummary + '?id=' + userId;

    return this.http.cache().get<UserProjectsSummaryResponse>(url);
  }
}
