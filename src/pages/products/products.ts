import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/product.dto';
import { ProductService } from '../../services/product.service';
import { ProductDetailsPage } from '../product-detail/product-details';

@Component({
  selector: 'page-products',
  templateUrl: 'products.html'
})
export class ProductsPage {
  products: ProductDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {
  }

  ionViewWillEnter(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.findAll()
      .subscribe(res => this.products = res);
  }

  showDetails(product) {
    this.navCtrl.push(ProductDetailsPage, {
      product: product
    });
  }
}
