import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class SharedMaterialModuleModule { }
