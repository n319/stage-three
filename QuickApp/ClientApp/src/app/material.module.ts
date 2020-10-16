import { NgModule } from '@angular/core';

import {
  MatFormFieldModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatDialogModule,
  MatExpansionModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports: [
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
