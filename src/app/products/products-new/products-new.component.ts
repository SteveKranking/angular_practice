import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-new',
  templateUrl: './products-new.component.html',
  styleUrls: ['./products-new.component.sass']
})
export class ProductsNewComponent implements OnInit {
  private subscription: Subscription;
  private _products: Array<Product>;

  private newProduct = {
    title: undefined,
    price: undefined,
    img: undefined
  }

  constructor(private _ps: ProductService, private _router: Router) {
    this.subscription = _ps.products.subscribe(
      newProducts => this._products = newProducts ,
      err => console.error(err),
      () => {}
    )
   }

  ngOnInit() {
  }

  createProduct(form) {
    this._products.push(new Product(this.newProduct.title, this.newProduct.price, this.newProduct.img));
    this._ps.updateProducts(this._products);
    form.reset()
    this._router.navigateByUrl('/products');
  }

}
