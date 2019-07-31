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
import { PinNoteComponent } from './pin-note/pin-note.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PinBoardComponent,
    StickyNoteComponent,
    ListNoteComponent,
    StickerComponent,
    LinkNoteComponent,
    ProjectGroupComponent,
    PinNoteComponent
  ],
  imports: [
    CommonModule,
    BaseViewModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule,
    BrowserAnimationsModule
  ],
  exports: [PinBoardComponent]
})
export class PinboardViewModule {}
