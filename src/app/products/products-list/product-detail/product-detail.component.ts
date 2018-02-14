import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  private _product: Product;
  private _pos: number;

  @Input()
  set pos (idx: number) {
    this._pos = idx;
  }

  @Input()
  set product(data: Product) {
    this._product = data;
  }
  @Output() removeProduct: EventEmitter<Number> = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }
}
