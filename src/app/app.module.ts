import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import {  NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MothanaComponent } from './mothana/mothana.component';
import { AprilDirective } from './april.directive';
import { CustomFormsModule } from 'ng2-validation';
import { YarabComponent } from './yarab/yarab.component';
import { AuthService } from './auth.service';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { NgbAlertModule, NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [

    AppComponent,
      MothanaComponent,
      AprilDirective,
      YarabComponent,
      NavComponent,
      ProductsComponent,
      MyOrdersComponent,
      AdminOrderComponent,
      AdminProductsComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule ,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }



