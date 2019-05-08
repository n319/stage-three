import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { ApiModule } from '@app/api/api.module';
import { KanbanService } from './kanban.service';
import { ListViewService } from './list-view.service';
import { PanelViewService } from './panel-view.service';
import { ContentViewService } from './content-view.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ApiModule,
  ],
  providers: [KanbanService, ListViewService, PanelViewService, ContentViewService]
})
export class ApplicationModule { }
