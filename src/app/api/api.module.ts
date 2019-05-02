import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './user.service';
import { PostService } from './post.service';

import {AgileHouseUserModel} from './models/agileHouseUser.model';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthJWTInterceptor } from './authentication/auth-jwt.interceptor';

import { BoardModel } from './models/board.model';
import { CardMovementModel } from './models/card-movement.model';
import { CardModel } from './models/card.model';
import { ListModel } from './models/list.model';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    AuthJWTInterceptor,
    PostService,
    UserService],
  exports: [], 
})
export class ApiModule { }
