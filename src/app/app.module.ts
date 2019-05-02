import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BacklogModule } from './backlog/backlog.module';
import { MatGalleryModule } from './mat-gallery/mat-gallery.module';
import { ProjectsModule } from './projects/projects.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { MaterialGalleryComponent } from './mat-gallery/material-gallery/material-gallery.component';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
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
  declarations: [AppComponent, MaterialGalleryComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
