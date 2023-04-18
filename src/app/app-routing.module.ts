import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ItemPageComponent } from './pages/item-page/item-page.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { LoginComponent } from './pages/login/login.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardRetailerComponent } from './components/board-retailer/board-retailer.component';
import{BoardBuyerComponent} from './components/board-buyer/board-buyer.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products/item/:id', component: ItemPageComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'products', component: ProductsPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: 'admin', component: BoardAdminComponent},
  {path: 'buyer', component: BoardBuyerComponent},
  {path: 'retailer', component: BoardRetailerComponent},
  {path: 'profile', component: UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
