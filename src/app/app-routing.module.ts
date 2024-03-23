import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { CategotysComponent } from './pages/home/components/categotys/categotys.component';
import { FoodDescriptionComponent } from './pages/home/components/food-description/food-description.component';
import { ForgetPasswordComponent } from './shared/services/forget-password/forget-password.component';
import { authGuard } from './shared/auth.guard';
import { WishlistComponent } from './pages/home/components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  {
    path: 'category/:id',
    canActivate: [authGuard],
    component: CategotysComponent,
  },
  { path: '404', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'orders', canActivate: [authGuard], component: OrdersComponent },
  { path: 'password-forget', component: ForgetPasswordComponent },
  { path: 'profile', canActivate: [authGuard], component: ProfileComponent },
  {
    path: 'prodDesc/:id',
    canActivate: [authGuard],
    component: FoodDescriptionComponent,
  },
  { path: 'cart', canActivate: [authGuard], component: CartComponent },
  { path: 'wishlist', component: WishlistComponent },

  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
