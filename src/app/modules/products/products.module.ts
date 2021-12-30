import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModuleModule } from '../shared-material-module/shared-material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { ProductComponent } from './components/product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ProductListComponent } from './components/products/products.component';
import { ProductRoutingModule } from './product-routing/product-routing.module';


@NgModule({
  declarations: [ProductComponent,ProductPageComponent,ProductListComponent],
  imports: [
    CommonModule,
    SharedMaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProductRoutingModule
  ],
  providers: [ProductService]
})
export class ProductsModule { }
