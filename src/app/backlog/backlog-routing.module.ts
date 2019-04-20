import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { BacklogHomeComponent } from './backlog-home/backlog-home.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'backlog', component: BacklogHomeComponent, data: { title: extract('Backlog') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BacklogRoutingModule {}
