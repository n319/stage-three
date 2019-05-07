import { Injectable } from '@angular/core';
import { ProjectService } from '../project.service';
import { ViewType, PanelViewContent } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class PanelViewService {

  constructor(public projectService: ProjectService) { }

  public getProjectsByViewType(view: ViewType): PanelViewContent{
    return null;
  }

  public getProjectsByUser(id: string): PanelViewContent{
    return null;
  }

  
}
