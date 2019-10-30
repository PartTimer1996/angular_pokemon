import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { User } from '../_interfaces/user';
import { statSync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

// map the user data to the Observable stored in the user db
user: Observable<User>;
// Get basic user auth data not mapped to document in db
// user: any;
errormessage: string;
errorcode: string;
constructor(
  public afs: AngularFirestore,   // Inject Firestore service
  public afAuth: AngularFireAuth, // Inject Firebase auth service
  public router: Router,
  ) {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return null;
        }
      })
    );
    // Used for basic email and password authentication
    // this.user = afAuth.authState.pipe(
    //   tap(user => {
    //     if (user) {
    //       return user;
    //     } else {
    //       return null;
    //     }
    //   })
    // )
  }
  firebaseLogin(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
     .then(() => {
      this.router.navigateByUrl('Dashboard');
     })
    .catch(error => {
    this.errormessage = error.message;
    console.log(`Error found: Code: ${this.errorcode}, Message: ${this.errormessage}`);
    });
  }

  firebaseSignup(email, password, displayName, photoURL) {
      return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        this.updateUserData(credential.user, displayName, photoURL);
        this.router.navigateByUrl('Dashboard');
       })
      .catch(error => {
      // Handle Errors here.
      this.errorcode = error.code;
      this.errormessage = error.message;
      console.log(`Error found: Code: ${this.errorcode}, Message: ${this.errormessage}` );
    });
  }

  firebaseLogout() {
    this.afAuth.auth.signOut().catch(error => {
      // Handle Errors here.
      this.errorcode = error.code;
      this.errormessage = error.message;
      console.log(`Error found: Code: ${this.errorcode}, Message: ${this.errormessage}` );
      // ...
    });
}
  private updateUserData(user, displayName1, photoURL1) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: displayName1,
      photoURL: photoURL1
    };

    return userRef.set(data, { merge: true });

  }
}
