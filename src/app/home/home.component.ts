import {Component, OnDestroy, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable, Subscription} from 'rxjs';
import { Products } from '../models/products.model';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { ProductsState } from '../ngrx/states/products.state';
import { ApiService } from '../services/api.service';
import { clothState } from '../ngrx/states/cloth.state';
import { MatDialog } from '@angular/material/dialog';
import { DialogdescriptionComponent } from '../home/dialog/dialogdescription/dialogdescription.component';
import * as StockActions from '../ngrx/actions/stocks.action';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  subscription: Subscription[] = [];

  productslist$: Observable<Products[]> = this.store.select(
    'products',
    'productList'
  );

  carlist :Products[] = [];

  constructor(
    private api: ApiService,
    private store: Store<{
      products: ProductsState;
      cloth: clothState;
    }>,
    private dialog: MatDialog
  ) {
    this.store.dispatch(ProductsActions.get());
    this.store.dispatch(StockActions.get());
    this.subscription.push(
      this.productslist$.subscribe((value) => {
        //convert value
        console.log('carlist:', this.carlist);
      })
    );
  }



  closeDialog() {
    this.dialog.closeAll();
  }

  openDialog(product: any): void {
    const dialogRef = this.dialog.open(DialogdescriptionComponent, {
      data: product,
    });
  }

  addToCart(car: any) {
    console.log('Adding to cart:', car);
    // Dispatch the addToCart action with the car as the payload
    this.store.dispatch(ProductsActions.addToCart({ cloth: car }));
  }
}
