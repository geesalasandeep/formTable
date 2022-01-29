import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';





const material = [
                  MatIconModule,
                  MatButtonModule,
                  MatFormFieldModule,
                  MatInputModule,
                  MatGridListModule,
                  MatSidenavModule,
                  MatToolbarModule,
                  MatTableModule,
                  MatSnackBarModule,
                  MatPaginatorModule,
                  MatDialogModule
                  
                ]

@NgModule({

  imports: [ material ],
  exports: [ material ]
})
export class MaterialModule { }
