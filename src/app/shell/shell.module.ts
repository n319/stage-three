import { NgModule } from './node_modules/@app/base/shell/node_modules/@angular/core';
import { CommonModule } from './node_modules/@app/base/shell/node_modules/@angular/common';
import { TranslateModule } from './node_modules/@app/base/shell/node_modules/@ngx-translate/core';
import { RouterModule } from './node_modules/@app/base/shell/node_modules/@angular/router';
import { NgbModule } from './node_modules/@app/base/shell/node_modules/@ng-bootstrap/ng-bootstrap';

import { ShellComponent } from './shell.component';
import { HeaderComponent } from './header/header.component';
import { ThemeModule } from './node_modules/@app/base/theme/theme.module';

@NgModule({
  imports: [CommonModule, TranslateModule, NgbModule, RouterModule, ThemeModule],
  declarations: [HeaderComponent, ShellComponent]
})
export class ShellModule {}
