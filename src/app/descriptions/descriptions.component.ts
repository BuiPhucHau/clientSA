import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';
import { Store } from '@ngrx/store';
import { clothState } from '../ngrx/states/cloth.state';
import { ProductsState } from '../ngrx/states/products.state';
import * as ProductsActions from '../ngrx/actions/products.actions';

@Component({
  selector: 'app-descriptions',
  templateUrl: './descriptions.component.html',
  styleUrls: ['./descriptions.component.scss'],
})
export class DescriptionsComponent {
  clothList$ = this.store.select((state) => state.cloth.cartList);
  total$ = this.store.select((state) => state.cloth.total);
  // priceCloth$ = this.store.select((state) => state.cloth.priceCloth);

  constructor(
    private store: Store<{ products: ProductsState; cloth: clothState }>
  ) {}
  addToStock(cloth: Products) {
    this.store.dispatch(ProductsActions.addToStock({ cloth }));
  }
  removeFormStock(cloth: Products) {
    this.store.dispatch(ProductsActions.removeFormStock({ cloth }));
  }
  removeFormCart(cloth: Products) {
    this.store.dispatch(ProductsActions.removeFormCart({ cloth }));
  }

  showStock(cloth: Products) {
    console.log(cloth.stock);
  }
}
