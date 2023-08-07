import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../shared/shared.module';

import { MatInputModule } from '@angular/material/input';
import { DialogComponent } from './dialogcomponent/dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AdminComponent, DialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatInputModule,
    MatDialogModule,
  ],
})
export class AdminModule {}
