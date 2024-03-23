import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  constructor(private _auth: AuthService) {}
  email: string = '';

  errorMsg: string = '';
  successMsg: string = '';

  forgetPassword(email: string) {
    this.errorMsg = '';
    this.successMsg = '';

    this._auth
      .forgetPassword(email)
      .then((data) => {
        this.successMsg = 'check your email box!';
        console.log('this.successMsg');
      })
      .catch((error) => {
        this.errorMsg = error;
        console.log('forget password error', error);
      });
  }
}
