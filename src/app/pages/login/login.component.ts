import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private _authService: AuthService, private _router: Router) {}

  loginLoader: boolean = false;

  email: string = '';
  password: string = '';

  errorMsg: string = '';

  login(email: string, password: string) {
    this.errorMsg = '';
    if (email && password) {
      this.loginLoader = true;
      this._authService
        .login(email, password)
        .then((data) => {
          if (data.user.emailVerified) {
            console.log('login data', data);
            localStorage.setItem(
              'token',
              `${data?.user?._delegate.accessToken}`
            );
            this._authService.updateToken();
            this._router.navigate(['/home']);
            this.loginLoader = false;
          } else {
            this.errorMsg = 'email address is not Verified';
            setTimeout(() => (this.errorMsg = ''), 6000);
            this._authService.verifyEmailAddress(data.user).then((data) => {
              console.log('verification email sent!');
            });
            this.loginLoader = false;
          }
        })
        .catch((error) => {
          this.errorMsg = 'invalid email or password';
          setTimeout(() => (this.errorMsg = ''), 6000);
          this.loginLoader = false;
        });
      email = '';
      password = '';
    }
  }

  loginWithGoogle() {
    this._authService
      .loginWithGoogle()
      .then((data) => {
        console.log('login google data', data?.user?._delegate.accessToken);
        localStorage.setItem('token', data?.user?._delegate.accessToken);
        this._authService.updateToken();
        this._router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(`login with google error ${error}`);
      });
  }
}
