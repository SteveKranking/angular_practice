import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './products/product.service';
import { ProductsNewComponent } from './products/products-new/products-new.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductsEditComponent } from './products/products-edit/products-edit.component';
import { ProductDetailComponent } from './products/products-list/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    ProductsNewComponent,
    ProductsListComponent,
    ProductsEditComponent,
    ProductDetailComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
