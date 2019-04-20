import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogHomeComponent } from './backlog-home/backlog-home.component';
import { PinboardComponent } from './pinboard/pinboard.component';
import { BacklogRoutingModule } from './backlog-routing.module';
import { ArchiveComponent } from './archive/archive.component';
import { SharedModule } from '@app/shared';

@NgModule({
  declarations: [BacklogHomeComponent, PinboardComponent, ArchiveComponent],
  imports: [
    CommonModule,
    SharedModule,
    BacklogRoutingModule
  ]
})
export class BacklogModule { }
