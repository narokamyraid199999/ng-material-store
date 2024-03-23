import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { CartService } from 'src/app/shared/services/cart.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private _cartService: CartService,
    private _wishlistService: WishlistService
  ) {}

  ngOnInit(): void {
    this.logChecker();
    this.getBadgeValue();
  }

  badgeHidden: boolean = false;

  isLogedIn: boolean = false;

  cartBadgeValue: number = 0;
  wishlistBadgeValue: number = 0;

  getBadgeValue() {
    this._cartService.foodList.subscribe((data) => {
      this.cartBadgeValue = data.length;
    });

    this._wishlistService.favFoodsList.subscribe((data) => {
      this.wishlistBadgeValue = data.length;
    });
  }

  logChecker() {
    this.isLogedIn = false;
    this._auth.token.subscribe({
      next: (data) => {
        if (data && data != 'null') {
          console.log(data);
          this.isLogedIn = true;
        } else {
          this.isLogedIn = false;
        }
      },
      error: (error) => {
        this.isLogedIn = false;
      },
    });
  }

  signout() {
    this._auth.signOut().then((data) => {
      console.log('sign out', data);
    });
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    this._auth.updateToken();
  }
}
