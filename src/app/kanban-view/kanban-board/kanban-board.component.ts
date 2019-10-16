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
  public pieces: Observable<PieceModel[]>;
  constructor(
    private prjSvc: ProjectService,
    private pceSvc: PieceService,
    private session: SessionManagerService,
    private ref: ReferenceService
  ) {}

  ngOnInit(): void {
    const proj = this.session.getCurrentProject();
    this.ObsLaneList = this.ref.getOrderOfKanbanLanes();
    this.pieces = this.pceSvc.getPiecesListById(proj.id).pipe(share());
  }

  // getConnectedList(): Observable<PieceModel[]> {
  //   return this.pieces.subscribe(

  //   );
  // }

  getConnectedList(lane: any): Observable<PieceModel[]> {
    debugger;
    return this.pieces;
  }

  getPiecesForLane(lane: any): Observable<PieceModel[]> {
    debugger;
    return this.pieces;
  }

  onItemDrop(event: CdkDragDrop<PieceModel[]>) {
    debugger;
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const piece = (event.previousContainer.data[event.previousIndex] as unknown) as PieceModel;
      debugger;
      piece.kanbanStatus = 'test';
      this.pceSvc.updatePiece(piece, false);

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  onLaneDrop(event: CdkDragDrop<KanbanLaneModel[]>) {
    // const kanbanLane = (event.previousContainer.data[event.previousIndex] as unknown) as KanbanLaneModel;
    //   kanbanLane.laneSequence = event.currentIndex;
    //   this.ref.updateKanbanLane(kanbanLane);
    debugger;
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  }
}
