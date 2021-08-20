import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableProductListComponent } from './components/available-product-list/available-product-list.component';
import { ImportListComponent } from './components/import-list/import-list.component';

const routes: Routes = [
  {
    path:'available-product-list',
    component:AvailableProductListComponent
  },
  {
    path:'import-product-list',
    component:ImportListComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroceryProductRoutingModule { }
