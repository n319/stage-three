import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';
import { UserService } from './user.service';

import {AgileHouseUserModel} from './models/agileHouseUser.model';

import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationGuard } from './authentication/authentication.guard';
import { AuthJWTInterceptor } from './authentication/auth-jwt.interceptor';
import { HttpClient } from '@angular/common/http';

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
  exports: []
})
export class ApiModule { }
