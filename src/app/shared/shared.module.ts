import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { LatestPostByCategoryComponent } from './latest-post-by-category/latest-post-by-category.component';
import { ApiModule } from '@app/api/api.module';
import { KanbanLaneComponent } from './kanban-lane/kanban-lane.component';
import { GalleryBreadcrumbComponent } from './gallery-breadcrumb/gallery-breadcrumb.component';

@NgModule({
  imports: [CommonModule, ApiModule],
  declarations: [LoaderComponent, LatestPostByCategoryComponent, KanbanLaneComponent, GalleryBreadcrumbComponent ],
  exports: [LoaderComponent, LatestPostByCategoryComponent, KanbanLaneComponent]
})
export class SharedModule {}
