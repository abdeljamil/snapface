import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { CurrencyPipe, DatePipe, DecimalPipe, LowerCasePipe, NgClass, NgStyle, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle,
    NgClass,
    UpperCasePipe,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {


  constructor(private faceSnapsService: FaceSnapsService) {}

  @Input() faceSnap!:FaceSnap;

  // Pour initialiser ces propriétés en suivant les best practices Angular, 
  // on vas  utiliser la méthode  ngOnInit() . 
  // Pour l'utiliser, notre component on doit implémenter l'interface  OnInit  :
  //La méthode  ngOnInit()  est appelée automatiquement par Angular au moment de la création de chaque instance du component. 
  // Elle permet notamment d'initialiser des propriétés.
  //On va maintenant initialiser les quatre propriétés dans la méthode  ngOnInit()  :

  
  snapButtonText!: string;
  userHasSnapped!: boolean;
  myPrice:number = 336.75; 

  //On va maintenant initialiser les quatre propriétés dans la méthode  ngOnInit()  :

  ngOnInit() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

 
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }
  
  unSnap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  
  snap() {
    this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
}
}
