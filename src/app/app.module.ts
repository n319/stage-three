import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AuthJWTInterceptor } from './api/authentication/auth-jwt.interceptor';
import { environment } from '@env/environment';

import { AppComponent } from './app.component';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';

import { LoginModule } from './login/login.module';
import { ShellModule } from './shell/shell.module';

import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { BacklogModule } from './backlog/backlog.module';
import { MatGalleryModule } from './mat-gallery/mat-gallery.module';
import { ProjectsModule } from './projects/projects.module';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule,
    SharedModule,
    ShellModule,
    HomeModule,
    BacklogModule,
    ProjectsModule,
    MatGalleryModule,
    AboutModule,
    LoginModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthJWTInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {}
