import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ProductsPage } from '../pages/products/products';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailsPage } from '../pages/product-detail/product-details';
import { AccountDetailsPage } from '../pages/account-detail/account-details';

@NgModule({
  declarations: [
    MyApp,
    ProductsPage, 
    ProductDetailsPage, 
    AccountDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProductsPage,
    ProductDetailsPage,
    AccountDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
