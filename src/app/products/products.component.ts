import { Component, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent implements OnInit {

  private products: Array<Product> = [
    new Product('laptop', 500.99, 'some/url'),
    new Product('tv', 1000.99, 'some/url'),
    new Product('Winnie the Pooh', 12.99),
    new Product('Boosted Board', 1500.99, 'some/url'),
  ];

  constructor(private _ps: ProductService) { }

  ngOnInit() {
    this.updateProducts();
  }

  updateProducts() {
    this._ps.updateProducts(this.products);
  }

}
