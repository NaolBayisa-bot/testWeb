import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-section.html',
  styleUrl: './service-section.css',
})
export class ServiceSection {
activeService: string = 'web'; // default active service
}
