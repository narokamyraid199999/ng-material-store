import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { angularMaterialModule } from './angularMaterial/angularMaterial.module';
import { NavBarComponent } from './pages/shared/nav-bar/nav-bar.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FoodsComponent } from './pages/home/components/foods/foods.component';
import { FoodItemComponent } from './pages/home/components/food-item/food-item.component';
import { FoodDetailsComponent } from './pages/home/components/food-details/food-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CutPipePipe } from './pages/home/components/foods/cut-pipe.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RelatedFoodComponent } from './pages/home/components/related-food/related-food.component';
import { CategotysComponent } from './pages/home/components/categotys/categotys.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FoodDescriptionComponent } from './pages/home/components/food-description/food-description.component';
import { AngularFireModule } from '@angular/fire/compat';
import { ForgetPasswordComponent } from './shared/services/forget-password/forget-password.component';
import { SearchPipePipe } from './pages/home/components/foods/search-pipe.pipe';
import { CategorySliderComponent } from './pages/home/components/category-slider/category-slider.component';
import { SearchProductsComponent } from './pages/home/components/search-products/search-products.component';
import { WishlistComponent } from './pages/home/components/wishlist/wishlist.component';
import { ShopPathComponent } from './pages/home/components/shop-path/shop-path.component';

const firebaseConfig = {
  apiKey: 'AIzaSyBPjOqagFC7TV4Rhr2GA0xwtjBlGPIM-TU',
  authDomain: 'angular-store-e4b7c.firebaseapp.com',
  projectId: 'angular-store-e4b7c',
  storageBucket: 'angular-store-e4b7c.appspot.com',
  messagingSenderId: '571255596272',
  appId: '1:571255596272:web:1953f6d11fab77fca14e35',
};

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CartComponent,
    ProfileComponent,
    OrdersComponent,
    PageNotFoundComponent,
    SignupComponent,
    FoodsComponent,
    FoodItemComponent,
    FoodDetailsComponent,
    CutPipePipe,
    RelatedFoodComponent,
    CategotysComponent,
    FoodDescriptionComponent,
    ForgetPasswordComponent,
    SearchPipePipe,
    CategorySliderComponent,
    SearchProductsComponent,
    WishlistComponent,
    ShopPathComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    angularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
