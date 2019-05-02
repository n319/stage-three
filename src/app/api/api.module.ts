import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import { AuthenticationService } from "./authentication/authentication.service";

import { AuthenticationGuard } from "./authentication/authentication.guard";

import { AuthJWTInterceptor } from "./authentication/auth-jwt.interceptor";

import { PostService } from "./post.service";

import { UserService } from "./user.service";

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
