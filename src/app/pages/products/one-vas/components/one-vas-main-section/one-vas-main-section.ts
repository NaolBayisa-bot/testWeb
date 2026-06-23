import { Component } from '@angular/core';

@Component({
  selector: 'app-one-vas-main-section',
  imports: [],
  templateUrl: './one-vas-main-section.html',
  styleUrl: './one-vas-main-section.css',
})
export class OneVasMainSection {
  showImage = false;

  openImage() {
    this.showImage = true;
  }

  closeImage() {
    this.showImage = false;
  }
}
