import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KanbanService } from './kanban.service';
import { ListViewService } from './list-view.service';
import { PanelViewService } from './panel-view.service';
import { ContentViewService } from './content-view.service';
import { ApiModule } from '@app/api/api.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, ApiModule],
  providers: [KanbanService, ListViewService, PanelViewService, ContentViewService]
})
export class AHApplicationModule {}
