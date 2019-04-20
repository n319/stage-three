import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsHomeComponent } from './projects-home/projects-home.component';
import { KanbanModule } from '@app/kanban/kanban.module';


@NgModule({
  declarations: [ProjectsHomeComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    KanbanModule
  ]
})
export class ProjectsModule { }
