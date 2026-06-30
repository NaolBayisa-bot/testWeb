import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { TeleBusMainSection } from './components/tele-bus-main-section/tele-bus-main-section';

@Component({
  standalone: true,
  selector: 'app-tele-bus',
  imports: [CommonModule, Header, Footer, TeleBusMainSection],
  templateUrl: './tele-bus.html',
  styleUrl: './tele-bus.css',
})
export class TeleBus {

}
