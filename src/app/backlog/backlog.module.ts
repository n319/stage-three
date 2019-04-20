import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BacklogHomeComponent } from './backlog-home/backlog-home.component';
import { PinboardComponent } from './pinboard/pinboard.component';

@NgModule({
  declarations: [BacklogHomeComponent, PinboardComponent],
  imports: [
    CommonModule
  ]
})
export class BacklogModule { }
