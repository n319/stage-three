import { Component, OnInit, Input } from '@angular/core';
import { PanelViewComponent } from '@app/base-view/panel-view.component';
import { ProjectService } from '@app/api/project.service';
import { PieceService } from '@app/api/piece.service';
import { UserService } from '@app/api/user.service';
import { Observable, of } from 'rxjs';
import { ProjectModel } from '@app/api/models/project.model';
import { tap, map, share } from 'rxjs/operators';
import { PieceModel } from '@app/api/models/piece.model';
import { SessionManagerService } from '@app/ah-application/session-manager.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  public ObsLaneList: Observable<Set<string>>;

  constructor(private prjSvc: ProjectService, private pceSvc: PieceService, private session: SessionManagerService) {}

  ngOnInit(): void {
    const proj = this.session.getCurrentProject();
    this.pceSvc
      .getPiecesListById(proj.id)
      .pipe(
        //refactor this to the piece service
        share(),
        tap(pcList => {
          this.ObsLaneList = of(new Set(pcList.map(pc => pc.kanbanStatus)));
        })
      )
      .subscribe();
  }
}
