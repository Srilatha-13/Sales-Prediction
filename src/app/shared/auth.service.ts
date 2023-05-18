import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  // isAuthenticated():boolean{
  //   if(sessionStorage.getItem('token')!==null){
  //     return true;
  //   }
  //   return false
  // }

  // canAccess(){
  //   if(!this.isAuthenticated()){
  //     this.router.navigate(['/login'])
  //   }
  // }

  // login method
  login(email: string, password: string) {
    try {
      this.fireauth.signInWithEmailAndPassword(email, password).then(
        (res) => {
          localStorage.setItem('token', 'true');
          localStorage.setItem('data', JSON.stringify(res.user));

          if (res.user?.emailVerified == true) {
            this.router.navigate(['/home']);
          } else {
            alert('kindly verify your Email');
          }
        },
        (err) => {
          alert(err.message);
          this.router.navigate(['/login']);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  // register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(
      (res) => {
        alert('Registration Successful');
        this.sendEmailForVarification(res.user);
        this.router.navigate(['/login']);
      },
      (err) => {
        alert(err.message);
        this.router.navigate(['/signup']);
      }
    );
  }

  // email varification
  sendEmailForVarification(user: any) {
    console.log(user);
    user.sendEmailVerification().then(
      (res: any) => {
        // this.router.navigate(['/verify-email']);
        this.router.navigate(['/login']);
      },
      (err: any) => {
        alert('Something went wrong. Not able to send mail to your email.');
      }
    );
  }
}