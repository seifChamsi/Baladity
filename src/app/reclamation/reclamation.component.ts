import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import {firestore} from "firebase"

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(nom:string,email:string,cin:number,desc:string,type:number){
    console.log(email,type);
    let createdAt= new Date().toUTCString;
    let docRef = firestore().collection("reclamations")
    .add({
      nom,
      email,
      cin,
      desc,
      type,
      createdAt
      
    }).then(ref => {
      console.log('Added document with ID: ', ref.id);
    });
  }

}
