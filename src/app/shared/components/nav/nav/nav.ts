import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './nav.html',
})
export class Nav {
  isActive(sectionId: string): boolean {
    if (sectionId === 'head') {
      return this.activeSection === '';
    }
    return this.activeSection === sectionId;
  }

  mobileMenuOpen = false;
  scrolled = false;
  activeSection: string = '';

  constructor(private router: Router) {}

  get isPortfolioRoute(): boolean {
    return this.router.url.startsWith('/portfolio');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    const sections = [
      { id: '', label: 'home' },
      { id: 'about-us', label: 'about-us' },
      { id: 'products', label: 'products' },
      { id: 'services', label: 'services' },
      { id: 'why-us', label: 'why-us' },
      { id: 'contact', label: 'contact' },
    ];

    const scrollY = window.scrollY + 120; // offset for fixed nav height

    // Check from bottom to top to get the last (deepest) visible section
    let found = '';
    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetBottom = offsetTop + el.offsetHeight;
        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          found = section.id;
        }
      }
    }

    // If scrolled to very top, highlight Home
    if (!found && window.scrollY < 200) {
      found = '';
    }

    this.activeSection = found;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const scrollToElement = () => {
      if (!sectionId) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
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
