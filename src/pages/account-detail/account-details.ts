import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AccountDto } from '../../models/account.dto';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'page-account-details',
    templateUrl: 'account-details.html'
})
export class AccountDetailsPage {
    account: AccountDto;

    constructor(public navCtrl: NavController, public navParams: NavParams, private productService: ProductService) {
        this.account = navParams.get('account');
    }

    ionViewWillEnter(): void {
        this.loadAccount();
    }

    loadAccount(): void {
        this.productService.findAccountById(this.account.ACCOUNT_ID)
            .subscribe(res => this.account = res[0]);
    }
}
