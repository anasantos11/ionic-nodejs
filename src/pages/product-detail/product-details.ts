import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductDTO } from '../../models/product.dto';
import { ProductService } from '../../services/product.service';
import { AccountDto } from '../../models/account.dto';
import { AccountDetailsPage } from '../account-detail/account-details';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html'
})
export class ProductDetailsPage {
  product: ProductDTO;
  accounts: AccountDto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {
    this.product = navParams.get('product');
  }

  ionViewWillEnter(): void {
    this.loadAccounts();
  }

  loadAccounts(): void {
    this.productService.findAllAccountByProductId(this.product.PRODUCT_CD)
      .subscribe(res => this.accounts = res);
  }

  showDetails(account) {
    this.navCtrl.push(AccountDetailsPage, {
      account: account
    });
  }

}
