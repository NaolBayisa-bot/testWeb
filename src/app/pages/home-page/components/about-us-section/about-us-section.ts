import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-about-us-section',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './about-us-section.html',
  styleUrl: './about-us-section.css',
})
export class AboutUsSection {

}
