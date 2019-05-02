import { NgModule } from './node_modules/@app/base/shared/node_modules/@angular/core';
import { CommonModule } from './node_modules/@app/base/shared/node_modules/@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ApiModule } from './node_modules/@app/base/api/api.module';

import { LatestPostByCategoryComponent } from './latest-post-by-category/latest-post-by-category.component';

import { GalleryBreadcrumbComponent } from './gallery-breadcrumb/gallery-breadcrumb.component';


import { KanbanLaneComponent } from './kanban-lane/kanban-lane.component';

import { ContentEditDirective } from './directives/content-edit.directive';

@NgModule({
  imports: [CommonModule, ApiModule],
  declarations: [
    LoaderComponent,
    LatestPostByCategoryComponent,
    KanbanLaneComponent,
    GalleryBreadcrumbComponent,
    ContentEditDirective
  ],
  exports: [
    LoaderComponent,
    LatestPostByCategoryComponent,
    KanbanLaneComponent,
    ContentEditDirective
  ]
})
export class SharedModule {}
