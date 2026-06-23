import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Nav } from '../../../../shared/components/nav/nav/nav';

@Component({
  selector: 'app-header-section',
  imports: [Nav],
  templateUrl: './header-section.html',
  styleUrl: './header-section.css',
})
export class HeaderSection {
  mobileMenuOpen = false;

  constructor(private router: Router) {}

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const scrollToElement = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (this.router.url === '/' || this.router.url.startsWith('/?')) {
      scrollToElement();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(scrollToElement, 50);
      });
    }
  }
}









