import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { ContentEditDirective } from './directives/content-edit.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, ContentEditDirective],
  exports: [LoaderComponent, ContentEditDirective]
})
export class SharedModule {}
