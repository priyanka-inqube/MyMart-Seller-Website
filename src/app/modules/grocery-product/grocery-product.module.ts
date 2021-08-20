import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroceryProductRoutingModule } from './grocery-product-routing.module';
import { AvailableProductListComponent } from './components/available-product-list/available-product-list.component';
import { ImportListComponent } from './components/import-list/import-list.component';


@NgModule({
  declarations: [
    AvailableProductListComponent,
    ImportListComponent
  ],
  imports: [
    CommonModule,
    GroceryProductRoutingModule
  ],
  exports:[AvailableProductListComponent,ImportListComponent]
})
export class GroceryProductModule { }
