import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from 'src/app/modules/products/components/product-list/product-list.component';
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes:Routes = [
  {path:"",component:ProductListComponent, children:[
    {path: "list/:id", component: ProductPageComponent},
    {path: "list", component: ProductsComponent}
  ]}
];

@NgModule({
  declarations: [ProductListComponent, ProductPageComponent, ProductsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedMaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
