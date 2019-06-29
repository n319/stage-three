import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared';
import { MaterialGalleryComponent } from './material-gallery/material-gallery.component';
import { MaterialGalleryRoutingModule } from './mat-gallery-routing.module';
import { BreadCrumbTrailComponent } from './bread-crumb-trail/bread-crumb-trail.component';

@NgModule({
  declarations: [MaterialGalleryComponent, BreadCrumbTrailComponent],
  imports: [CommonModule, SharedModule, MaterialGalleryRoutingModule]
})
export class MatGalleryModule {}
