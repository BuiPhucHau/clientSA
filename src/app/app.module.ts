import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { productsReducer } from './ngrx/reducers/products.reducer';
import { clothReducer } from './ngrx/reducers/cloth.reducer';
import { ProductsEffects } from './ngrx/effects/products.effects';
import { RouterModule } from '@angular/router';


import {
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {stockReducer} from "./ngrx/reducers/stocks.reducer";
import {StocksEffects} from "./ngrx/effects/stocks.effects";
import {userReducer} from "./ngrx/reducers/user.reducer";
import {UserEffects} from "./ngrx/effects/user.effect";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,

    StoreModule.forRoot(
      { products: productsReducer, cloth: clothReducer,stock: stockReducer, user: userReducer },

      {}
    ),
    //how to use stock effect and product effect
    EffectsModule.forRoot([ProductsEffects, StocksEffects, UserEffects]),
  ],
  providers: [ScreenTrackingService, UserTrackingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
