import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-service-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './service-section.html',
  styleUrl: './service-section.css',
})
export class ServiceSection {
activeService: string = 'web'; // default active service
}
