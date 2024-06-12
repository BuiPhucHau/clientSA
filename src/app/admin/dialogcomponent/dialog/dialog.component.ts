import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ProductsState } from 'src/app/ngrx/states/products.state';
import { Products } from 'src/app/models/products.model';
import * as ProductsActions from '../../../ngrx/actions/products.actions';
import {StockState} from "../../../ngrx/states/stock.state";
import {StockModel} from "../../../models/stock.model";
import  * as StockActions from "../../../ngrx/actions/stocks.action";
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Products,
    private store: Store<{ stock: StockState }>
  ) {
    console.log(this.product);

  }
  public myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      id: new FormControl(0, [Validators.required]),
      prodID: new FormControl(this.product.id, [Validators.required]),
      quantity: new FormControl(0, [Validators.required]),
    });
  }

  updateProduct(stock: StockModel) {

    this.store.dispatch(StockActions.createStock({ stock }));
    console.log(stock);

  }

  CreateProduct(stock: StockModel) {


  }
}
