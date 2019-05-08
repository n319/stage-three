import { NgModule } from "@angular/core";
import { ProjectsHomeComponent } from "./projects-home/projects-home.component";
import { CommonModule } from "@angular/common";
import { ProjectsRoutingModule } from "./projects-routing.module";
import { KanbanViewModule } from "@app/kanban-view/kanban-view.module";



@NgModule({
  declarations: [ProjectsHomeComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    KanbanViewModule
  ]
})
export class ProjectsModule { }
