import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescriptionsRoutingModule } from './descriptions-routing.module';
import { DescriptionsComponent } from './descriptions.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DescriptionsComponent],
  imports: [CommonModule, DescriptionsRoutingModule, SharedModule],
})
export class DescriptionsModule {}
