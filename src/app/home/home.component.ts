import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { ProductsState } from '../ngrx/states/products.state';
import { ApiService } from '../services/api.service';
import { clothState } from '../ngrx/states/cloth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  productslist$: Observable<Products[]> = this.store.select(
    'products',
    'productList'
  );
  constructor(
    private api: ApiService,
    private store: Store<{ products: ProductsState; cloth: clothState }>
  ) {
    this.store.dispatch(ProductsActions.get());
    console.log(this.productslist$);
  }

  addToCart(cloth: Products) {
    this.store.dispatch(ProductsActions.addToCart({ cloth }));
  }
}