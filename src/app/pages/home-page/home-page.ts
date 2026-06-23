import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderSection } from './components/header-section/header-section';
import { AboutUsSection } from './components/about-us-section/about-us-section';

import { GrowthSection } from './components/growth-section/growth-section';
import { WhyUsSection } from './components/why-us-section/why-us-section';
import { RecentProjectSection } from './components/recent-project-section/recent-project-section';
import { FaqSection } from './components/faq-section/faq-section';
import { GetIntouchSection } from './components/get-intouch-section/get-intouch-section';
import { Footer } from '../../shared/components/footer/footer';
import { ProductSection } from './components/product-section/product-section';
import { ServiceSection } from './components/service-section/service-section';

@Component({
  selector: 'app-home-page',
  standalone: true, // make sure the component is standalone
  imports: [
    CommonModule,
    FormsModule,
    HeaderSection,
    AboutUsSection,
    ProductSection,
    ServiceSection,
    GrowthSection,
    WhyUsSection,
    RecentProjectSection,
    FaqSection,
    GetIntouchSection,
    Footer
  ],
  templateUrl: './home-page.html',
  styleUrls: ['./home-page.css'],
})
export class HomePage {}
