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
    public userService: UserService,
    private store: Store<{ products: ProductsState; idToken: AuthState }>,
    private dialog: MatDialog
  ) {
    this.idToken$.subscribe((value) => {
      console.log(value);

      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.get({ idToken: value }));
      }
    });
    this.isDelSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        this.idToken$.subscribe((value) => {
          console.log(value);

          if (value) {
            console.log('làm đúng r' + value);
            this.store.dispatch(ProductsActions.get({ idToken: value }));
          }
        });
      }
    });

    this.isUpSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        this.idToken$.subscribe((value) => {
          console.log(value);

          if (value) {
            console.log('làm đúng r' + value);
            this.store.dispatch(ProductsActions.get({ idToken: value }));
          }
        });
      }
    });

    this.isAddSuccess$.subscribe((value) => {
      console.log(value);
      if (value) {
        this.idToken$.subscribe((value) => {
          console.log(value);

          if (value) {
            console.log('làm đúng r' + value);
            this.store.dispatch(ProductsActions.get({ idToken: value }));
          }
        });
      }
    });
  }
  public myForm!: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      imgUrl: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      quality: new FormControl('', [Validators.required]),
    });
  }

  del(id: string) {
    this.idToken$.subscribe((value) => {
      console.log(value);

      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.del({ id, idToken: value }));
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
    } else if (!product.quality) {
      alert('điền đủ đê!!!');
    } else {
      this.idToken$.subscribe((value) => {
        console.log(value);

        if (value) {
          console.log('làm đúng r' + value);
          this.store.dispatch(
            ProductsActions.add({ product: this.myForm.value, idToken: value })
          );
        }
      });
    }
    this.myForm.reset();
  }

  openDialog(product: Products): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: product,
    });
  }
}
