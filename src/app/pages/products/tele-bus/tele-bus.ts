import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { TeleBusMainSection } from './components/tele-bus-main-section/tele-bus-main-section';

@Component({
  selector: 'app-tele-bus',
  imports: [CommonModule,FormsModule,Header,Footer,TeleBusMainSection],
  templateUrl: './tele-bus.html',
  styleUrl: './tele-bus.css',
})
export class TeleBus {

}
