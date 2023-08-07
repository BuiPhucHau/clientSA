import { Component } from '@angular/core';
import { ProductsState } from 'src/app/ngrx/states/products.state';
import { Products } from 'src/app/models/products.model';
import * as ProductsActions from '../../../ngrx/actions/products.actions';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogdescription',
  templateUrl: './dialogdescription.component.html',
  styleUrls: ['./dialogdescription.component.scss'],
})
export class DialogdescriptionComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public product: Products,
    private store: Store<{ product: ProductsState }>,
    private dialog: MatDialog
  ) {}
  closeDialog() {
    this.dialog.closeAll();
  }
}
