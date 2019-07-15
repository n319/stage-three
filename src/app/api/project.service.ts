import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import { Observable, of } from 'rxjs';
import { ProjectModel, IProject } from './models/project.model';
import { PanelViewProjects } from '@app/ah-application/models/panel-view.model';
import { ProjectSummary } from './models/agileHouseUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  public getCurrentProject(projects: ProjectSummary[]): Observable<ProjectModel> {
    //TODO: later - local storage persistance?
    const curr = JSON.parse(sessionStorage.getItem('currentProject')) as ProjectModel;
    if (curr !== null) {
      return of(curr);
    } else {
      // this.GetUserProjectsSummary().subscribe(summary => {
      //   if (summary.Results.length > 0) {
      //     return of();
      //   }
      // });
    }
  }

  public getProject(id: string): Observable<IProject> {
    const url = environment.projectApi.get + id;
    return this.http.cache().get<IProject>(url);
  }

  public getProjectList(prjs: ProjectSummary[]): Observable<PanelViewProjects> {
    const url = environment.projectApi.getList;
    return this.http.cache().post<PanelViewProjects>(url, prjs);
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
