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
import { KanbanLaneModel } from '@app/api/models/kanbanLane.model';
import { ReferenceService } from '@app/api/reference.service';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  public ObsLaneList: Observable<KanbanLaneModel[]>;

  constructor(
    private prjSvc: ProjectService,
    private pceSvc: PieceService,
    private session: SessionManagerService,
    private ref: ReferenceService
  ) {}

  ngOnInit(): void {
    const proj = this.session.getCurrentProject();
    this.pceSvc
      .getPiecesListById(proj.id)
      .pipe(
        //refactor this to the piece service
        share(),
        tap(pcList => {
          this.ObsLaneList = this.ref.getOrderOfKanbanLanes();
          // this.ObsLaneList = of(new Set(pcList.map(pc => pc.kanbanStatus)));
        })
      )
      .subscribe();
  }

  onLaneDrop(event: CdkDragDrop<string[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const kanbanLane = (event.previousContainer.data[event.previousIndex] as unknown) as KanbanLaneModel;
      kanbanLane.laneSequence = event.currentIndex;
      this.ref.updateKanbanLane(kanbanLane);

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
