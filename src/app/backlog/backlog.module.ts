import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogHomeComponent } from './backlog-home/backlog-home.component';
import { PinboardComponent } from './pinboard/pinboard.component';
import { BacklogRoutingModule } from './backlog-routing.module';
import { ArchiveComponent } from './archive/archive.component';
import { SharedModule } from '@app/shared';
import { ArchiveBoardComponent } from './archive-board/archive-board.component';
import { ArchiveCardDetailComponent } from './archive-card-detail/archive-card-detail.component';
import { ArchiveCardSummaryComponent } from './archive-card-summary/archive-card-summary.component';
import { ArchiveContextMenuComponent } from './archive-context-menu/archive-context-menu.component';
import { ArchiveListComponent } from './archive-list/archive-list.component';
import { PinboardCreateMenuComponent } from './pinboard-create-menu/pinboard-create-menu.component';
import { KanbanModule } from '@app/kanban/kanban.module';

@NgModule({
  declarations: [
    BacklogHomeComponent,
    PinboardComponent,
    ArchiveComponent,
    ArchiveBoardComponent,
    ArchiveCardDetailComponent,
    ArchiveCardSummaryComponent,
    ArchiveContextMenuComponent,
    ArchiveListComponent,
    PinboardCreateMenuComponent
  ],
  imports: [CommonModule, SharedModule, BacklogRoutingModule, KanbanModule]
})
export class BacklogModule {}
