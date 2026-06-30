import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from '../../../shared/components/header/header';
import { Footer } from '../../../shared/components/footer/footer';
import { SmsEthiopiaMainSection } from './components/sms-ethiopia-main-section/sms-ethiopia-main-section';

@Component({
  standalone: true,
  selector: 'app-sms-ethiopia',
  imports: [CommonModule, Header, Footer, SmsEthiopiaMainSection],
  templateUrl: './sms-ethiopia.html',
  styleUrl: './sms-ethiopia.css',
})
export class SmsEthiopia {

}
