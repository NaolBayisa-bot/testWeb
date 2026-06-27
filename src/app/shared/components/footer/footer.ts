import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
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
