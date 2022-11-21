import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  exports: [
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
