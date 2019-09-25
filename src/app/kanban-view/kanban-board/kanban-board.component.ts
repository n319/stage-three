import { Component, OnInit, Input } from '@angular/core';
import { PanelViewComponent } from '@app/base-view/panel-view.component';
import { ProjectService } from '@app/api/project.service';
import { PieceService } from '@app/api/piece.service';
import { UserService } from '@app/api/user.service';
import { Observable } from 'rxjs';
import { ProjectModel } from '@app/api/models/project.model';
import { tap } from 'rxjs/operators';
import { PieceModel } from '@app/api/models/piece.model';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  @Input() projectId: string;

  public currentProject: Observable<ProjectModel>;
  public pieces: Observable<PieceModel[]>;
  public laneList: string[] = [];

  constructor(private prjSvc: ProjectService, private pceSvc: PieceService, private usrSvc: UserService) {}

  ngOnInit(): void {
    this.currentProject = this.prjSvc.getProject(this.projectId);
    this.pieces = this.pceSvc.getPiecesListById(this.projectId).pipe(
      tap(pc => {
        debugger;
      })
    );
  }
}
