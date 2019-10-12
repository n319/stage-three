import { Component, OnInit, Input } from '@angular/core';
import { ListViewComponent } from '@app/base-view/list-view.component';
import { Observable, of } from 'rxjs';
import { PieceModel } from '@app/api/models/piece.model';
import { ProjectService } from '@app/api/project.service';
import { PieceService } from '@app/api/piece.service';
import { UserService } from '@app/api/user.service';
import { SessionManagerService } from '@app/ah-application/session-manager.service';
import { share, tap, filter, map } from 'rxjs/operators';
import { MatList } from '@angular/material';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ProjectModel } from '@app/api/models/project.model';

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent implements OnInit {
  @Input() public label: string;
  public dataLabel: string;
  public proj: ProjectModel;
  public pieces: PieceModel[];

  constructor(private pceSvc: PieceService, private session: SessionManagerService) {}

  ngOnInit(): void {
    this.proj = this.session.getCurrentProject();
    this.dataLabel = this.label;
    this.pceSvc
      .getPiecesListById(this.proj.id)
      .pipe(
        share(),
        map((pieces: PieceModel[]) => pieces.filter((pc: PieceModel) => pc.kanbanStatus === this.label))
      )
      .subscribe(result => (this.pieces = result));
  }

  get pieceIds(): string[] {
    return this.proj.pieces;
  }

  onTaskDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const piece = (event.previousContainer.data[event.previousIndex] as unknown) as PieceModel;
      piece.kanbanStatus = this.label;
      this.pceSvc.updatePiece(piece);

      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
}
