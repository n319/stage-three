import { NgModule } from '@angular/core';
import { BacklogHomeComponent } from './backlog-home/backlog-home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { BacklogRoutingModule } from './backlog-routing.module';
import { PinboardViewModule } from '@app/pinboard-view/pinboard-view.module';
import { ArchiveViewModule } from '@app/archive-view/archive-view.module';
import { AHApplicationModule } from '@app/ah-application/ah-application.module';

@NgModule({
  declarations: [BacklogHomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    BacklogRoutingModule,
    PinboardViewModule,
    ArchiveViewModule,
    AHApplicationModule
  ]
})
export class BacklogModule {}
