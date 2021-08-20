import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AvailableProductListComponent } from './modules/grocery-product/components/available-product-list/available-product-list.component';
import { ImportListComponent } from './modules/grocery-product/components/import-list/import-list.component';

const routes: Routes = [
  {
    path:'',pathMatch:'full',redirectTo:'grocery-product/available-product-list'
  },
  {
    path:'grocery-product/available-product-list',
    component:AvailableProductListComponent
  },
  // {
  //   path:'grocery-product/import-product-list',
  //   component:ImportListComponent
  // },
  {
    path:'grocery-product',
    loadChildren:()=>import('./modules/grocery-product/grocery-product.module').then(m=>m.GroceryProductModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
