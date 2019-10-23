import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedDndComponent } from './nested-dnd/nested-dnd.component';
import { MaterialModule } from '@app/material.module';
import { DndModule } from 'ngx-drag-drop';
import { ListDndComponent } from './list-dnd/list-dnd.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [NestedDndComponent, ListDndComponent],
  imports: [CommonModule, MaterialModule, DndModule, FlexLayoutModule],
  exports: [NestedDndComponent, ListDndComponent]
})
export class KanbanDndModule {}
