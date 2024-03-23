import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BehaviorSubject } from 'rxjs';
import { GoogleAuthProvider } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _fireBaseAuth: AngularFireAuth) {
    this.updateToken();
  }

  token: BehaviorSubject<string> = new BehaviorSubject('');

  updateToken() {
    this.token.next(`${localStorage.getItem('token')}`);
  }

  login(email: string, password: string): Promise<any> {
    return this._fireBaseAuth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string): Promise<any> {
    return this._fireBaseAuth.createUserWithEmailAndPassword(email, password);
  }

  verifyEmailAddress(user: any): Promise<any> {
    console.log(user);
    return user.sendEmailVerification();
  }

  signOut(): Promise<any> {
    return this._fireBaseAuth.signInWithCustomToken(
      `${localStorage.getItem('token')}`
    );
    // return this._fireBaseAuth.signOut();
  }

  forgetPassword(email: string): Promise<any> {
    return this._fireBaseAuth.sendPasswordResetEmail(email);
  }

  loginWithGoogle(): Promise<any> {
    return this._fireBaseAuth.signInWithPopup(new GoogleAuthProvider());
  }
}
