import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { KanbanHomeComponent } from './kanban-home/kanban-home.component';
import { BoardComponent } from './board/board.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { ListComponent } from './list/list.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';

@NgModule({
  declarations: [KanbanHomeComponent, BoardComponent, CardDetailComponent, CardSummaryComponent, ContextMenuComponent, ListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class KanbanModule { }
