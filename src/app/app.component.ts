import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
// import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baladity';
  constructor(public auth:AuthService){
    // const firebaseConfig = {
    //   apiKey: "AIzaSyCZrOyytoKZQdE3krCMXV-ruWAHXW91dkw",
    //   authDomain: "baladity-5feff.firebaseapp.com",
    //   databaseURL: "https://baladity-5feff.firebaseio.com",
    //   projectId: "baladity-5feff",
    //   storageBucket: "baladity-5feff.appspot.com",
    //   messagingSenderId: "774990176657",
    //   appId: "1:774990176657:web:adcdc1fd27dbd60186fa30"
    // }
    // firebase.initializeApp(firebaseConfig);
  }
}
