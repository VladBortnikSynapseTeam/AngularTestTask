import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../components/product-list/product-list.component';
import { ProductPageComponent } from '../components/product-page/product-page.component';
import { ProductListComponent } from '../components/products/products.component';

const routes:Routes = [
  {path:"",component:ProductComponent, children:[
    {path: "list/:id", component: ProductPageComponent},
    {path: "list", component: ProductListComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
