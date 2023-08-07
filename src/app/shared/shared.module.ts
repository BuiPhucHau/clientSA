import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatIconModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class SharedModule {}
