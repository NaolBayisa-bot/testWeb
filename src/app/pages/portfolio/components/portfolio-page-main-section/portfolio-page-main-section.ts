import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-portfolio-page-main-section',
  imports: [CommonModule],
  templateUrl: './portfolio-page-main-section.html',
  styleUrl: './portfolio-page-main-section.css',
})
export class PortfolioPageMainSection {
  @Input() activeTab: string = 'client';
}
