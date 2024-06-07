import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Products } from '../models/products.model';
import * as ProductsActions from '../ngrx/actions/products.actions';
import { ProductsState } from '../ngrx/states/products.state';
import { ApiService } from '../services/api.service';
import { clothState } from '../ngrx/states/cloth.state';
import { MatDialog } from '@angular/material/dialog';
import { DialogdescriptionComponent } from '../home/dialog/dialogdescription/dialogdescription.component';
import { AuthState } from '../ngrx/states/auth.state';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  idToken$: Observable<string> = this.store.select('idToken', 'idToken');
  productslist$: Observable<Products[]> = this.store.select(
    'products',
    'productList'
  );

  carlist = [
    {
      id:'1',
      name: 'Lamborghini Aventador',
      price: 10000000,
      imgUrl: 'https://i.pinimg.com/736x/be/91/6c/be916c85849fecc6267718f0abc5bb3a.jpg'
    },
    {
      id:'2',
      name: 'Lamborghini Huracan',
      price: 9500000,
      imgUrl: 'https://images.dealer.com/ddc/vehicles/2022/Lamborghini/Aventador%20SVJ/Convertible/color/Blu%20Nila%20Metallic-BNBN-0,62,190-640-en_US.jpg'
    },
    {
      id:'3',
      name: 'Lamborghini Urus',
      price: 12000000,
      imgUrl: 'https://images.dealer.com/ddc/vehicles/2020/Lamborghini/Aventador%20S/Coupe/color/Verde%20Mantis%20Pearl-A3A3-99,162,2-640-en_US.jpg'
    },
    {
      id:'4',
      name: 'Lamborghini Urus',
      price: 12000000,
      imgUrl: 'https://img.freepik.com/premium-photo/black-lamborghini-with-white-background_901003-28480.jpg'
    }
  ];

  constructor(
    private api: ApiService,
    private store: Store<{
      products: ProductsState;
      idToken: AuthState;
      cloth: clothState;
    }>,
    private dialog: MatDialog
  ) {
    this.idToken$.subscribe((value) => {
      console.log(value);

      if (value) {
        console.log('làm đúng r' + value);
        this.store.dispatch(ProductsActions.get({ idToken: value }));
      }
    });
    console.log(this.productslist$);
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