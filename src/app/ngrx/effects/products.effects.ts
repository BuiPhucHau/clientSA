import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import * as ProductsActions from '../actions/products.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.get),
      exhaustMap(() =>
        this.apiService.getProducts().pipe(
          map((products) => {
            return ProductsActions.getSuccess({ productList: products });
          }),
          catchError((error) => of(ProductsActions.getFailure({ error })))
        )
      )
    )
  );
}
