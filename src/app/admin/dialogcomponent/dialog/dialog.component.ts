import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductsState } from 'src/app/ngrx/states/products.state';
import { Products } from 'src/app/models/products.model';
import * as ProductsActions from '../../../ngrx/actions/products.actions';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Products,
    private store: Store<{ product: ProductsState }>
  ) {
    console.log(this.product);
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
  updateProduct(product: Products) {
    product._id = this.product._id;
    this.store.dispatch(ProductsActions.updateProduct({ product }));

    if (!product.imgUrl) {
      product.imgUrl = this.product.imgUrl;
    }
    if (!product.price) {
      product.price = this.product.price;
    }
    if (!product.name) {
      product.name = this.product.name;
    }
  }
}
