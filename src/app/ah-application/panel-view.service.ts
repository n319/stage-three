import { Injectable } from '@angular/core';
import { ProjectService } from '../api/project.service';
import { ViewType, UserProjectsSummaryResponse, ProjectModel, IProject, ViewPanel } from '../api/models/project.model';
import { Observable } from 'rxjs';
import { PanelViewProjects } from './models/panel-view.model';
import { ProjectSummary } from '@app/api/models/agileHouseUser.model';
import { UserService } from '@app/api/user.service';

@Injectable({
  providedIn: 'root'
})
export class PanelViewService {
  constructor(
    private projectService: ProjectService,
    private userService: UserService,
  ) {}

  public getUserProjectsByViewPanel(panel: ViewPanel): Observable<PanelViewProjects> {
    this.userService.GetUserProjectsSummary().subscribe((prjSum: UserProjectsSummaryResponse) => {
      const projectSummaryList: ProjectSummary[] = [];

      if (prjSum.Results) {
        if (panel === ViewPanel.Backlog) {
          prjSum.Results.forEach(summary => {
            if (summary.view === ViewType.Archive || summary.view === ViewType.Pinboard) {
              projectSummaryList.concat(summary);
            }
          });
        }

        return this.projectService.getProjectList(projectSummaryList);
      }
    });

    return null;
  }
}
