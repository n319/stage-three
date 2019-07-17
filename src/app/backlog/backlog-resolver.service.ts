import { Injectable } from '@angular/core';
import { PanelViewProjects } from '@app/ah-application/models/panel-view.model';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PanelViewService } from '@app/ah-application/panel-view.service';
import { UIViewPanel } from '@app/api/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class BacklogResolverService implements Resolve<PanelViewProjects> {
  constructor(private router: Router, private viewDataService: PanelViewService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PanelViewProjects> {
    return this.viewDataService.getUserProjectsByViewPanel(UIViewPanel.Backlog);
  }
}
