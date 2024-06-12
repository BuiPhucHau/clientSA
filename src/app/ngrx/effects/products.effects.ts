import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import * as ProductsActions from '../actions/products.actions';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { idToken } from '@angular/fire/auth';
import {Products} from "../../models/products.model";

@Injectable()
export class ProductsEffects {
  constructor(private actions$: Actions, private apiService: ApiService) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.get),
      exhaustMap((action) =>
        this.apiService.getProducts().pipe(
          map((value) => {
            return ProductsActions.getSuccess({ productRespone: value});
          }),
          catchError((error) => of(ProductsActions.getFailure({ error })))
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.del),
      exhaustMap((action) =>
        this.apiService.deleteProducts(action.id).pipe(
          map(() => ProductsActions.delSuccess()),
          catchError((error) => of(ProductsActions.delFailure({ error })))
        )
      )
    )
  );

  postProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.add),
      exhaustMap((action) =>
        this.apiService.postProducts(action.product).pipe(
          map(() => ProductsActions.addSuccess()),
          catchError((error) => of(ProductsActions.addFailure({ error })))
        )
      )
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      exhaustMap((action) =>
        this.apiService.updateProduct(action.product).pipe(
          map(() => ProductsActions.updateProductSuccess()),
          catchError((error) =>
            of(ProductsActions.updateProducttFailure({ error }))
          )
        )
      )
    )
  );
}
