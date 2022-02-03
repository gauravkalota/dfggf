import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';






const MaterialComponents = [
  MatButtonModule,
  MatDatepickerModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule

];



@NgModule({
  imports:[MaterialComponents,
    MatTableModule,
  MatSortModule,
  MatPaginatorModule],
  exports:[MaterialComponents,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
    ]
})
export class MaterialModule { }
