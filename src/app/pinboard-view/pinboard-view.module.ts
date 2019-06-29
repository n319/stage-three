import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PinBoardComponent } from './pin-board/pin-board.component';
import { StickyNoteComponent } from './sticky-note/sticky-note.component';
import { ListNoteComponent } from './list-note/list-note.component';
import { StickerComponent } from './sticker/sticker.component';
import { LinkNoteComponent } from './link-note/link-note.component';
import { BaseViewModule } from '@app/base-view/base-view.module';
import { SharedModule } from '@app/shared';
import { ProjectGroupComponent } from './project-group/project-group.component';

@NgModule({
  declarations: [
    PinBoardComponent,
    StickyNoteComponent,
    ListNoteComponent,
    StickerComponent,
    LinkNoteComponent,
    ProjectGroupComponent
  ],
  imports: [CommonModule, BaseViewModule, SharedModule],
  exports: [PinBoardComponent]
})
export class PinboardViewModule {}
