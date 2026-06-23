import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../shared/components/header/header';
import { Footer } from '../../shared/components/footer/footer';
import { GrowthSection } from '../home-page/components/growth-section/growth-section';
import { PortfolioPageMainSection } from './components/portfolio-page-main-section/portfolio-page-main-section';
import { PortfolioPageHeader } from './components/portfolio-page-header/portfolio-page-header';
import { PortfolioPageGetInTouch } from './components/portfolio-page-get-in-touch/portfolio-page-get-in-touch';
import { GetIntouchSection } from "../home-page/components/get-intouch-section/get-intouch-section";

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule, FormsModule, PortfolioPageHeader, Footer, PortfolioPageGetInTouch, PortfolioPageMainSection],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {

}
