import { Component, Input, OnInit } from '@angular/core';
import { UserInfor } from '../models/user-info';

import { ApiService } from '../services/api.service';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';
import { ProductsState } from '../ngrx/states/products.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthState } from '../ngrx/states/auth.state';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialogcomponent/dialog/dialog.component';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  idToken$: Observable<string> = this.store.select('idToken', 'idToken');
  productslist$: Observable<Products[]> = this.store.select(
    'products',
    'productList'
  );
  isAddSuccess$ = this.store.select('products', 'isSuccessAdd');
  isUpSuccess$ = this.store.select('products', 'isUpSuccess');
  isDelSuccess$ = this.store.select('products', 'isSuccessdel');
  constructor(

    private store: Store<{ products: ProductsState; idToken: AuthState }>,
    private dialog: MatDialog
  ) {

    this.isDelSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.get());
      }
    });

    this.isUpSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.get());
      }

    });

    this.isAddSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.get());
      }

    });

  }
  public myForm!: FormGroup;

  ngOnInit(): void {

    this.myForm = new FormGroup({
      //how to set id == randomId
      name: new FormControl('', [Validators.required]),
      price: new FormControl(0, [Validators.required]),
      imgUrl: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),

    });
  }

  del(id: number) {
    this.idToken$.subscribe((value) => {
      console.log(value);

      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.del({ id }));
      }
    });
  }

  add(product: Products) {
    if (!product.imgUrl) {
      alert('điền đủ đê!!!!');
    } else if (!product.name) {
      alert('điền đủ đê!!!!');
    } else if (!product.price) {
      alert('điền đủ đê!!!');
    } else if (!product.category) {
      alert('điền đủ đê!!!');

    } else if (!product.description) {
      alert('điền đủ đê!!!');

    }else {

      this.store.dispatch(
        ProductsActions.add({ product: this.myForm.value })

      );
      console.log(product);
    }

  }

  openDialog(product: Products): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: product,
    });
  }
}
