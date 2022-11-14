import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDeatilPage } from './product-deatil.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDeatilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDeatilPageRoutingModule {}
