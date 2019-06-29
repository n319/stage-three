import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { ProjectService } from './project.service';
import { PostService } from './post.service';
import { PieceService } from './piece.service';
import { CoreModule } from '@app/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule],
  providers: [PieceService, PostService, ProjectService, UserService],
  exports: []
})
export class ApiModule {}
