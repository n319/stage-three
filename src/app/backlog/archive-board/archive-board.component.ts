import { Component, NgModule, OnInit } from '@angular/core';
import { IList, ListModel } from '@app/api/models/list.model';
import { ICardMovement } from '@app/api/models/card-movement.model';
import { BoardComponent } from '@app/kanban/board/board.component';

@Component({
  selector: 'app-archive-board',
  templateUrl: './archive-board.component.html',
  styleUrls: ['./archive-board.component.scss']
})
export class ArchiveBoardComponent extends BoardComponent{

}

