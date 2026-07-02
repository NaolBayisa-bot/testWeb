import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { AletcloudMainSection } from './components/tele-bus-main-section/aletcloud-main-section';

@Component({
  standalone: true,
  selector: 'app-aletcloud',
  imports: [CommonModule, Header, Footer, AletcloudMainSection],
  templateUrl: './aletcloud.html',
  styleUrl: './aletcloud.css',
})
export class Aletcloud {

}
