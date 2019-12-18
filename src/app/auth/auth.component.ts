import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {  FormGroup} from "@angular/forms";
import * as firebase from 'firebase/app';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth,public auth:AuthService) {
    
  }
 
  ngOnInit() {
  }
  
}
