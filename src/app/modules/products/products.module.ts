import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ProductComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/products/products.component';
const routes:Routes = [
  {path:"",component:ProductComponent, children:[
    {path: "list/:id", component: ProductPageComponent},
    {path: "list", component: ProductListComponent}
  ]}
];

@NgModule({
  declarations: [ProductComponent,ProductPageComponent,ProductListComponent],
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
