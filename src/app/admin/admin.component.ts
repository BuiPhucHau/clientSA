import { Component, Input, OnInit } from '@angular/core';
import { UserInfor } from '../models/user-info';
import { UserService } from '../services/user.service';
import { ApiService } from '../services/api.service';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';
import { ProductsState } from '../ngrx/states/products.state';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  productslist$: Observable<Products[]> = this.store.select(
    'products',
    'productList'
  );
  isDelSuccess$ = this.store.select('products', 'isSuccessdel');
  constructor(
    public userService: UserService,
    private store: Store<{ products: ProductsState }>
  ) {
    this.store.dispatch(ProductsActions.get());
    this.isDelSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        this.store.dispatch(ProductsActions.get());
      }
    });
  }
  public myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('', [Validators.required]),
      quality: new FormControl('', [Validators.required]),
    });
  }
  del(id: string) {
    this.store.dispatch(ProductsActions.del({ id }));
  }
  add(product: Products) {
    this.store.dispatch(ProductsActions.add({ product: this.myForm.value }));
    this.myForm.reset();
  }
}
