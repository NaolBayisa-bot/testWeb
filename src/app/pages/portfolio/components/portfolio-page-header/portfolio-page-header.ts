import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../../../../shared/components/nav/nav/nav';

@Component({
  standalone: true,
  selector: 'app-portfolio-page-header',
  imports: [Nav, CommonModule],
  templateUrl: './portfolio-page-header.html',
  styleUrl: './portfolio-page-header.css',
})
export class PortfolioPageHeader {
  @Input() activeTab: string = 'client';
  @Output() tabChange = new EventEmitter<string>();

  selectTab(tab: string) {
    this.tabChange.emit(tab);
  }
}
