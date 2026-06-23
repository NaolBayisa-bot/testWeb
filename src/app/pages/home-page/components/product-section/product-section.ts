import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-product-section',
    standalone: true, // ✅ REQUIRED
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
})
export class ProductSection {
activeService: string = 'web'; // default active service
}
