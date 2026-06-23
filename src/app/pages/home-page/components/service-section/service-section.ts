import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-service-section',
    standalone: true, // ✅ REQUIRED
  imports: [CommonModule, FormsModule],
  templateUrl: './service-section.html',
  styleUrl: './service-section.css',
})
export class ServiceSection {
activeService: string = 'web'; // default active service
}
