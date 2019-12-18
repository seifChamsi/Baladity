import { Component, OnInit } from '@angular/core';
// import {firestore} from "firebase"
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-reclamation-liste',
  templateUrl: './reclamation-liste.component.html',
  styleUrls: ['./reclamation-liste.component.css']
})
export class ReclamationListeComponent implements OnInit {
  reclamations :Observable<any[]>;

  constructor(db:AngularFirestore) { 
    this.reclamations = db.collection("reclamations").valueChanges();
  }

  ngOnInit() {
    
    
    // firestore().collection('reclamations').get()
    // .then(snapshot => {
    //   if (snapshot.empty) {
    //     console.log('No matching documents.');
    //     return;
    //   }  

    //   snapshot.forEach(doc => {
    //     this.reclamation.push(doc.data());
    //   });
    // })
    // .catch(err => {
    //   console.log('Error getting documents', err);
    // });

  }

}
