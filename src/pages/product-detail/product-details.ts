import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/product.dto';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  product: ProductDTO;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    debugger;
    this.product = navParams.get('product');
  }

}
