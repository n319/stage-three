import { Injectable } from '@angular/core';
import { PanelViewProjects } from '@app/ah-application/models/panel-view.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { UIViewPanel, ProjectModel } from '@app/api/models/project.model';
import { ProjectService } from '@app/api/project.service';
import { ProjectSummary } from '@app/api/models/agileHouseUser.model';

@Injectable({
  providedIn: 'root'
})
export class BacklogResolverService implements Resolve<ProjectModel> {
  constructor(private router: Router, private projectService: ProjectService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProjectModel | null> {
    if (route.queryParamMap.has('currentProject')) {
      const currPrjId = (JSON.parse(route.queryParams['currentProject']) as ProjectSummary).id;
      return this.projectService.getProject(currPrjId);
    } else {
      return of(null);
    }
  }
}
