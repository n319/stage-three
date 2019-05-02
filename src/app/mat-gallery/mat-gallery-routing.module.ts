import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Shell } from '@app/shell/shell.service';
import { extract } from '@app/core/i18n.service';
import { MaterialGalleryComponent } from './material-gallery/material-gallery.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'matgallery', component: MaterialGalleryComponent, data: { title: extract('Gallery') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MaterialGalleryRoutingModule {}
