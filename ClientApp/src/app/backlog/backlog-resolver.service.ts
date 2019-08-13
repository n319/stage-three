import { Injectable } from '@angular/core';
import { PanelViewProjects } from '@app/ah-application/models/panel-view.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { UIViewPanel, ProjectModel } from '@app/api/models/project.model';
import { ProjectService } from '@app/api/project.service';
import { ProjectSummary } from '@app/api/models/agileHouseUser.model';
import { PieceModel } from '@app/api/models/piece.model';

@Injectable({
  providedIn: 'root'
})
export class BacklogResolverService implements Resolve<PieceModel[]> {
  constructor(private router: Router, private data: PanelViewService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PieceModel[] | null> {
    if (route.queryParamMap.has('currentProjectId')) {
      return this.data.pieceService.getPiecesListById(route.queryParams['currentProjectId']);
    } else {
      return of(null);
    }
  }
}
