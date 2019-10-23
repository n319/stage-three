import { NgModule } from '@angular/core';
import { PanelViewComponent } from './panel-view.component';
import { ContentDetailViewComponent } from './content-detail-view.component';
import { ContentSummaryViewComponent } from './content-summary-view.component';
import { ContextMenuViewComponent } from './context-menu-view.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [PanelViewComponent, ContentDetailViewComponent, ContentSummaryViewComponent, ContextMenuViewComponent],
  imports: [CommonModule, SharedModule]
})
export class BaseViewModule {}
