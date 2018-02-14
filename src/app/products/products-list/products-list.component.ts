import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.sass']
})
export class ProductsListComponent implements OnInit {
  private subscription: Subscription;
  private _products: Array<Product>;

  constructor(private _ps: ProductService) {
    this.subscription = _ps.products.subscribe(
      newProducts => this._products = newProducts ,
      err => console.error(err),
      () => {}
    )
  }

  ngOnInit() {
    console.log(this._products);
  }

  deleteProduct(idx: number) {
    this._products.splice(idx, 1);
  }

  updateProducts() {
    this._ps.updateProducts(this._products);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
