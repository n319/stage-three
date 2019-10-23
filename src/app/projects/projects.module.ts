import { NgModule } from '@angular/core';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { KanbanDndModule } from '@app/kanban-dnd/kanban-dnd.module';

@NgModule({
  declarations: [ProjectsHomeComponent],
  imports: [CommonModule, ProjectsRoutingModule, KanbanDndModule]
})
export class ProjectsModule {}
