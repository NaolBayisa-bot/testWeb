import { CommonModule } from '@angular/common';
import { Component, Input, signal, effect, ViewEncapsulation } from '@angular/core';

export type SkeletonShape = 'rectangle' | 'circle';

@Component({
  selector: 'app-skeleton-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skeleton-img.component.html',
  styleUrl: './skeleton-img.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SkeletonImgComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() shape: SkeletonShape = 'rectangle';
  @Input() objectFit: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = 'cover';

  readonly loaded = signal(false);
  readonly errored = signal(false);

  constructor() {
    effect(() => {
      // Reset state when src changes
      if (this.src) {
        this.loaded.set(false);
        this.errored.set(false);
      }
    });
  }

  onLoaded() {
    this.loaded.set(true);
  }

  onError() {
    this.errored.set(true);
    this.loaded.set(false);
  }
}
