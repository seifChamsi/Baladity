import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import {  
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Observable,of } from "rxjs";

import {  switchMap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$:Observable<any>;
  
  constructor(private afAuth:AngularFireAuth,private afs:AngularFirestore,private router:Router) {
    this.user$ = afAuth.authState;
   }
  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    console.log(credential);
    return this.router.navigate(['/reclamations']);
  }
  async SignOut(){
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }
}
