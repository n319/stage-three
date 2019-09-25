import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanBoardComponent } from './kanban-board/kanban-board.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardSummaryComponent } from './card-summary/card-summary.component';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { KanbanListComponent } from './kanban-list/kanban-list.component';
import { BaseViewModule } from '@app/base-view/base-view.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [
    KanbanBoardComponent,
    CardDetailComponent,
    CardSummaryComponent,
    ContextMenuComponent,
    KanbanListComponent
  ],
  imports: [CommonModule, BaseViewModule, SharedModule],
  exports: [KanbanBoardComponent]
})
export class KanbanViewModule {}
