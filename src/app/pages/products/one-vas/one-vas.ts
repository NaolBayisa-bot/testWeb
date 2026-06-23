import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { OneVasMainSection } from './components/one-vas-main-section/one-vas-main-section';

@Component({
  selector: 'app-one-vas',
  imports: [CommonModule,FormsModule,Header,Footer,OneVasMainSection],
  templateUrl: './one-vas.html',
  styleUrl: './one-vas.css',
})
export class OneVas {

}
