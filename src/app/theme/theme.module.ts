import { NgModule } from '@app/base/theme/node_modules/@angular/cores/@angular/core';
import { CommonModule } from '@app/base/theme/node_modules/@angular/common@angular/common';
import { AgileHouseIconComponent } from './agile-house-icon/agile-house-icon.component';

@NgModule({
  declarations: [AgileHouseIconComponent],
  imports: [
    CommonModule
  ],
  exports: [AgileHouseIconComponent]
})
export class ThemeModule { }
