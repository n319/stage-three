import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogHomeComponent } from './backlog-home/backlog-home.component';
import { PinboardComponent } from './pinboard/pinboard.component';
import { BacklogRoutingModule } from './backlog-routing.module';
import { ArchiveComponent } from './archive/archive.component';

@NgModule({
  declarations: [BacklogHomeComponent, PinboardComponent, ArchiveComponent],
  imports: [
    CommonModule,
    BacklogRoutingModule
  ]
})
export class BacklogModule { }
