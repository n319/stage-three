import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BacklogModule } from './backlog/backlog.module';
import { MatGalleryModule } from './mat-gallery/mat-gallery.module';
import { ProjectsModule } from './projects/projects.module';
import { ApiModule } from './api/api.module';
import { AuthJWTInterceptor } from './api/authentication/auth-jwt.interceptor';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    ApiModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    TranslateModule.forRoot(),
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthJWTInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
