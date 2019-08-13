import { Injectable } from '@angular/core';
import { ProjectModel } from '@app/api/models/project.model';
import { UserService } from '@app/api/user.service';
import { ProjectService } from '@app/api/project.service';
import { PieceService } from '@app/api/piece.service';

@Injectable({
  providedIn: 'root'
})
export class SessionManagerService {
  constructor(private userSvc: UserService, private projectSvc: ProjectService, private pieceSvc: PieceService) {}

  public getCurrentProject(): ProjectModel {
    //TODO: later - local storage persistance?
    const curr = JSON.parse(sessionStorage.getItem('currentProject')) as ProjectModel;

    if (curr !== null) {
      return curr;
    } else {
      this.userSvc.GetUserProjectsSummary().subscribe(summary => {
        if (summary.projects.length > 0) {
        }
      });
    }
  }
}
