import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router) {
  }

  createUser(name: string, email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(name, password)
      .then(respo => {

        console.log(respo);
        this.router.navigate(['/']);
      }).catch(error => {
      console.log(error);
    });
  }

  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(respo => {

        console.log(respo);
        this.router.navigate(['/']);
      }).catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(respo => {

        console.log(respo);
        this.router.navigate(['/']);
      }).catch(error => {
      console.log(error);
    });
  }


}
