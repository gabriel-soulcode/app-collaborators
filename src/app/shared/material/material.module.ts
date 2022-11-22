import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  exports: [
    MatSnackBarModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule
  ]
})
export class MaterialModule { }
