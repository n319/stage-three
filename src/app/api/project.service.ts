import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment.prod';
import { Observable } from 'rxjs';
import { ProjectModel, IProject } from './models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  

  public getProject(id: string): Observable<IProject> {
    const url = environment.projectApi.get + id;
    return this.http.get<IProject>(url);
  }

  public createProject(project: IProject): Observable<IProject> {
    const url = environment.projectApi.create;
    return this.http.put<IProject>(url, project);
  }

  public updateProject(project: IProject): Observable<IProject> {
    const url = environment.projectApi.update;
    return this.http.post<IProject>(url, project);
  }
}
