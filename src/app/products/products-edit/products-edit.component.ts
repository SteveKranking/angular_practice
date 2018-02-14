import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.sass']
})
export class ProductsEditComponent implements OnInit {
  private subscription: Subscription;
  private newProduct: Product;
  private _products: Array<Product>;
  private _pos: number;

  constructor(private _ps: ProductService, private _route: ActivatedRoute, private _router: Router) {
    this.subscription = _ps.products.subscribe(
      newProducts => this._products = newProducts ,
      err => console.error(err),
      () => {}
    )
    this._route.params.subscribe( param => this._pos = param.id)
  }

  ngOnInit() {
    this.newProduct = this._products[this._pos];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  updateProduct(form) {
    this._products[this._pos] = new Product(this.newProduct.title, this.newProduct.price, this.newProduct.img)
    this._ps.updateProducts(this._products);
    form.reset()
    this._router.navigateByUrl('/products');
  }

}
