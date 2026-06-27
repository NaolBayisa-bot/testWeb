import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-portfolio-page-get-in-touch',
  imports: [],
  templateUrl: './portfolio-page-get-in-touch.html',
  styleUrl: './portfolio-page-get-in-touch.css',
})
export class PortfolioPageGetInTouch {
  constructor(private router: Router) {}

  goToContact() {
    const scrollToElement = () => {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (this.router.url === '/' || this.router.url.startsWith('/?')) {
      scrollToElement();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(scrollToElement, 100);
      });
    }
  }
}
