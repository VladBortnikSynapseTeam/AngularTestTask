import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
{path: "", pathMatch: "full",redirectTo:"/auth/login"},
{path: "auth", loadChildren: ()=> import('./modules/auth/auth.module').then(m=>m.AuthModule)},
{path: "products", loadChildren: ()=> import('./modules/products/products.module').then(m=>m.ProductsModule), canActivate: [AuthGuard]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
