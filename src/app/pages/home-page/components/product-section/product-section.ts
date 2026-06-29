import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-product-section',
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './product-section.html',
  styleUrl: './product-section.css',
})
export class ProductSection {
  activeCard: number | null = null;

  onCardHover(index: number): void {
    this.activeCard = index;
  }

  onCardLeave(): void {
    this.activeCard = null;
  }
}
