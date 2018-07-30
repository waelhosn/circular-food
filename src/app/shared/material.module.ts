import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatIconModule
} from '@angular/material';


const modules = [
  CommonModule,
  FormsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatListModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatAutocompleteModule,
  MatIconModule
];

@NgModule({
  imports: [ modules ],
  exports: [ modules ],
  declarations: [],
})
export class MaterialModule { }