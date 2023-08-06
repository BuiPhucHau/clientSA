import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionsComponent } from './descriptions.component';

const routes: Routes = [
  {
    path: '',
    component: DescriptionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionsRoutingModule {}
