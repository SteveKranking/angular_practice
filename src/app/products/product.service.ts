import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Product } from './product';

@Injectable()
export class ProductService {

  products = new BehaviorSubject(null);
  constructor() { }

  updateProducts(products: Array<Product>) {
    this.products.next(products);
  }

}
