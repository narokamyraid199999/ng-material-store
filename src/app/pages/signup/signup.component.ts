import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private _authService: AuthService, private _router: Router) {}
  email: string = '';
  password: string = '';

  errorMsg: string = '';

  signupLoader: boolean = false;

  signup(email: string, password: string) {
    this.errorMsg = '';
    if (
      this.email &&
      this.email.length > 0 &&
      this.password &&
      this.password.length > 0
    ) {
      this.signupLoader = true;
      this._authService
        .signup(email, password)
        .then((data) => {
          console.log('signup data', data);
          this._authService
            .verifyEmailAddress(data?.user)
            .then((data) => {
              console.log('succfullt send verify email address');
              this.signupLoader = false;
            })
            .catch((error) => {
              console.log(
                'error while sening email verification message',
                error
              );
              this.signupLoader = false;
            });
          // this._authService.updateToken();
          this._router.navigate(['/home']);
        })
        .catch((error) => {
          this.errorMsg = error;
          setTimeout(() => (this.errorMsg = ''), 6000);
          console.log(`login error ${error}}`);
          this.signupLoader = false;
        });
    }
  }

  signupWithGoogle() {
    this._authService
      .loginWithGoogle()
      .then((data) => {
        localStorage.setItem('token', data?.user?._delegate.accessToken);
        this._authService.updateToken();
        this._router.navigate(['/home']);
      })
      .catch((error) => {
        console.log(`login with google error ${error}`);
      });
  }
}
