import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { DialogdescriptionComponent } from './dialog/dialogdescription/dialogdescription.component';

@NgModule({
  declarations: [HomeComponent, DialogdescriptionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatSelectModule
  ],
})
export class HomeModule {}
