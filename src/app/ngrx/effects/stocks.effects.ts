import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
//import add-to-cart service
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { catchError, exhaustMap, map, of } from 'rxjs';
import * as StocksActions from '../actions/stocks.action';

@Injectable()
export class StocksEffects {
  constructor(private actions$: Actions, private addToCartService: AddToCartService) {}

  getStocks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StocksActions.get),
      exhaustMap((action) =>
        this.addToCartService.getStock().pipe(
          map((value) => {
            console.log('getStocks:', value);
            return StocksActions.getSuccess({ stockRespone: value });
          }),
          catchError((error) => of(StocksActions.getFailure({ error })))
        )
      )
    )
  );


  postStock$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StocksActions.createStock),
      exhaustMap((action) =>
        this.addToCartService.postStock(action.stock).pipe(
          map(() => StocksActions.createStockSuccess()),
          catchError((error) => of(StocksActions.createStockFailure({ error })))
        )
      )
    )
  );




}
