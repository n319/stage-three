import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';

import { LatestPostByCategoryComponent } from './latest-post-by-category/latest-post-by-category.component';

import { GalleryBreadcrumbComponent } from './gallery-breadcrumb/gallery-breadcrumb.component';

import { KanbanLaneComponent } from './kanban-lane/kanban-lane.component';

import { ContentEditDirective } from './directives/content-edit.directive';
import { ContentSliderComponent } from './content-slider/content-slider.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ApiModule } from './../api/api.module';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LoaderComponent,
    LatestPostByCategoryComponent,
    KanbanLaneComponent,
    GalleryBreadcrumbComponent,
    ContentEditDirective,
    ContentSliderComponent
  ],
  exports: [
    ApiModule,
    LoaderComponent,
    LatestPostByCategoryComponent,
    KanbanLaneComponent,
    ContentEditDirective,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule {}
