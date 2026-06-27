import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ImgFallbackDirective } from '../../../../shared/directives/img-fallback.directive';

@Component({
  standalone: true,
  selector: 'app-about-us-section',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive, ImgFallbackDirective],
  templateUrl: './about-us-section.html',
  styleUrl: './about-us-section.css',
})
export class AboutUsSection {

}
