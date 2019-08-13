import { Component, OnInit } from '@angular/core';
import { PanelViewComponent } from '@app/base-view/panel-view.component';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent extends PanelViewComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
