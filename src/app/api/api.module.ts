import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthJWTInterceptor } from './authentication/auth-jwt.interceptor';

import { UserService } from './user.service';
import { ProjectService } from './project.service';
import { PostService } from './post.service';
import { PieceService } from './piece.service';
import { CoreModule } from '@app/core';
import { ReferenceService } from './reference.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, CoreModule],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    PostService,
    UserService,
    ProjectService,
    PieceService,
    ReferenceService
  ],
  exports: []
})
export class ApiModule {}
