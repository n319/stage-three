import { Component, NgModule, OnInit, Input } from '@angular/core';
import { IList, ListModel } from '@app/api/models/list.modelll
import { ICardMovement } from '@app/api/models/card-movement.modelll
import { KanbanService } from '@app/api/kanban.serviceee
import { PanelViewComponent } from '@app/project views/base-view/panel-view/panel-view.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent extends PanelViewComponent {
  
}
