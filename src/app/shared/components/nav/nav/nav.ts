import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './nav.html',
})
export class Nav {
  mobileMenuOpen = false;
  scrolled = false;
  activeSection: string = '';

  constructor(private router: Router) {}

  // Modified to handle both route states and scroll states
  isActive(sectionId: string): boolean {
    if (sectionId === 'portfolio') {
      // Glow if we are on the /portfolio route OR if scrolled to the portfolio section
      return this.router.url.startsWith('/portfolio') || this.activeSection === 'portfolio';
    }
    
    // If we are on the portfolio page, don't light up homepage sections
    if (this.router.url.startsWith('/portfolio')) {
      return false;
    }

    if (sectionId === 'head') {
      return this.activeSection === '';
    }
    return this.activeSection === sectionId;
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  private updateActiveSection() {
    // 1. ADDED 'portfolio' section to the array tracking list
    const sections = [
      { id: '', label: 'home' },
      { id: 'about-us', label: 'about-us' },
      { id: 'products', label: 'products' },
      { id: 'services', label: 'services' },
      { id: 'why-us', label: 'why-us' },
      { id: 'portfolio', label: 'portfolio' }, // <-- Matches your homepage portfolio element ID
      { id: 'contact', label: 'contact' },
    ];

    const scrollY = window.scrollY + 120;

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