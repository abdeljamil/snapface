import { Component } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from "../face-snap/face-snap.component";
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent {

  constructor(private faceSnapsService: FaceSnapsService) { }
  faceSnaps!: FaceSnap[];
  ngOnInit() {
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
  }

}
