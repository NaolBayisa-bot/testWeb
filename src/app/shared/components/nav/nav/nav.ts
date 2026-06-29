import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ImgFallbackDirective } from '../../../directives/img-fallback.directive';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports:[CommonModule, FormsModule, RouterLink, ImgFallbackDirective],
  templateUrl: './nav.html',
})
export class Nav implements OnInit, OnDestroy {
  mobileMenuOpen = false;
  scrolled = false;
  activeSection: string = 'home';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      setTimeout(() => this.updateActiveSection(), 0);
    });
  }

  ngOnInit(): void {
    this.updateActiveSection();
  }

  ngOnDestroy(): void {
    this.removeBodyScrollLock();
  }

  get isPortfolioRoute(): boolean {
    return this.router.url.startsWith('/portfolio');
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.scrolled = window.scrollY > 40;
    this.updateActiveSection();
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  private updateActiveSection() {
    const sections = [
      { id: 'home', label: 'home' },
      { id: 'about-us', label: 'about-us' },
      { id: 'products', label: 'products' },
      { id: 'services', label: 'services' },
      { id: 'why-us', label: 'why-us' },
      { id: 'portfolio', label: 'portfolio' },
      { id: 'contact', label: 'contact' },
    ];

    const scrollY = window.scrollY + 120;

    let found = '';
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      const el = document.getElementById(section.id);
      if (el) {
        const offsetTop = el.offsetTop;
        const offsetBottom = offsetTop + el.offsetHeight;
        if (scrollY >= offsetTop && scrollY < offsetBottom) {
          found = section.id;
          break;
        }
      }
    }

    this.activeSection = found;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    this.toggleBodyScrollLock();
  }

  private closeMobileMenu() {
    this.mobileMenuOpen = false;
    this.removeBodyScrollLock();
  }

  private toggleBodyScrollLock() {
    if (this.mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  private removeBodyScrollLock() {
    document.body.style.overflow = '';
  }

  isActive(id: string): boolean {
    const mapped = id === 'head' ? 'home' : id;
    return this.activeSection === mapped;
  }

  scrollToSection(sectionId: string) {
    this.closeMobileMenu();

    const targetId = sectionId === 'head' ? 'home' : sectionId;

    const scrollToElement = () => {
      if (targetId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(targetId);
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
