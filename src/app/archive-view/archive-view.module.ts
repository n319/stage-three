import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveBoardComponent } from './archive-board/archive-board.component';
import { BaseViewModule } from '@app/base-view/base-view.module';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [ArchiveBoardComponent],
  imports: [CommonModule, BaseViewModule, SharedModule],
  exports: [ArchiveBoardComponent]
})
export class ArchiveViewModule {}
