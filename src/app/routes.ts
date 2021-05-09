import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
// import {NgModule} from "@angular/core";
// import {Routes,RouterModule} from "@angular/router";

import { Routes } from "@angular/router";
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';

// const routes: Routes=[];
// @NgModule({
//   imports: [RouterModule,forRoot(routes)],
//   exports: [RouterModule]

// })
// export class routes { }
export const appRoutes:Routes=[
  {path:"admin/order",component:AdminOrderComponent},
  {path:"admin/products",component:AdminProductsComponent},
  {path:"myorder",component:MyOrdersComponent},
  {path:"nav",component:NavComponent},
  {path:"products",component:ProductsComponent},

];




