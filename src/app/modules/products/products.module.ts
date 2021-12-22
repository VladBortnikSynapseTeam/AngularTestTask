import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/modules/products/components/product-list/product-list.component';
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:"list",component:ProductListComponent}
];

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModuleModule,
  ]
})
export class ProductsModule { }
