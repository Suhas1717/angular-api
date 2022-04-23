import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailesComponent } from './product-detailes/product-detailes.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    HeaderComponent,
    ProductDetailesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'product-details', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
