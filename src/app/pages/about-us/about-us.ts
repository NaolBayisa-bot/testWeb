import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Footer } from '../../shared/components/footer/footer';
import { GrowthSection } from '../home-page/components/growth-section/growth-section';
import { Header } from '../../shared/components/header/header';

import { AboutUsCoreSection } from "./components/about-us-core-section/about-us-core-section";
import { HeaderSection } from "../home-page/components/header-section/header-section";
import { AboutUsSection } from '../home-page/components/about-us-section/about-us-section';

@Component({
  standalone: true,
  selector: 'app-about-us',
  imports: [CommonModule, FormsModule, Footer, GrowthSection, Header, AboutUsCoreSection, AboutUsSection],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {

}
