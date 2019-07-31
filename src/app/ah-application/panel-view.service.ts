import { Injectable } from '@angular/core';
import { ProjectService } from '../api/project.service';
import { ViewType, UserProjectsSummaryResponse, UIViewPanel, ProjectModel } from '../api/models/project.model';
import { Observable, of } from 'rxjs';
import { PanelViewProjects } from './models/panel-view.model';
import { ProjectSummary } from '@app/api/models/agileHouseUser.model';
import { UserService } from '@app/api/user.service';
import { PieceService } from '@app/api/piece.service';

@Injectable({
  providedIn: 'root'
})
export class PanelViewService {
  constructor(
    public pieceService: PieceService,
    public projectService: ProjectService,
    public userService: UserService
  ) {}

  public getUserProjectsByViewPanel(panel: UIViewPanel): Observable<PanelViewProjects> {
    this.userService.GetUserProjectsSummary().subscribe((prjSum: UserProjectsSummaryResponse) => {
      const projectSummaryList: ProjectSummary[] = [];

      if (prjSum.projects) {
        if (panel === UIViewPanel.Backlog) {
          prjSum.projects.forEach(summary => {
            if (
              summary.viewType === ViewType.Archive ||
              summary.viewType === ViewType.Pinboard ||
              summary.viewType === ViewType.Backlog
            ) {
              projectSummaryList.push(summary);
            }
          });
        }
        return this.projectService.getProjectList(projectSummaryList);
      }
    });

    return null;
  }
}
