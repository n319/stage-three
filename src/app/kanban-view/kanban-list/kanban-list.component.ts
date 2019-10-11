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

@Component({
  selector: 'app-kanban-list',
  templateUrl: './kanban-list.component.html',
  styleUrls: ['./kanban-list.component.scss']
})
export class KanbanListComponent implements OnInit {
  @Input() label: string;
  public pieces: Observable<PieceModel[]>;

  constructor(private pceSvc: PieceService, private session: SessionManagerService) {}

  ngOnInit(): void {
    const proj = this.session.getCurrentProject();

    this.pieces = this.pceSvc.getPiecesListById(proj.id).pipe(
      share(),
      map((pieces: PieceModel[]) => pieces.filter((pc: PieceModel) => pc.kanbanStatus === this.label))
    );
  }
}
