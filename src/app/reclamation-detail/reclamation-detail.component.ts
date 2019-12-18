import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-reclamation-detail',
  templateUrl: './reclamation-detail.component.html',
  styleUrls: ['./reclamation-detail.component.css']
})
export class ReclamationDetailComponent implements OnInit {
  constructor(db:AngularFirestore) { 
  }

  ngOnInit() {
  }

}
