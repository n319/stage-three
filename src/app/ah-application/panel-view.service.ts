import { Injectable } from '@angular/core';
import { ProjectService } from '../api/project.service';
import { ViewType, PanelViewContent } from '../api/models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PanelViewService {

  constructor(public projectService: ProjectService) { }

  public getUserProjectsByViewType(view: ViewType): PanelViewContent {
    return null;
    //this.projectService.getProject
  }

}
