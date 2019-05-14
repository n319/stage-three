import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { PostModel } from './models/post.model';
import { AgileHouseUserModel } from './models/agileHouseUser.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  public getPostsForCurrentUser(): Observable<PostModel[]> {
    var userId = (JSON.parse(sessionStorage.getItem(environment.sessionKey.credentials)) as AgileHouseUserModel).id;

    var url = environment.postApi.postByUser + userId;

    return this.http.cache().get<PostModel[]>(url);
  }

  public getPostsByTag(tag: string): Observable<PostModel[]> {
    var url = environment.postApi.postByTag + tag;

    return this.http.cache().get<PostModel[]>(url);
  }
}
