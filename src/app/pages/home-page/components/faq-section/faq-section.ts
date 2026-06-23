import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-faq-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './faq-section.html',
  styleUrl: './faq-section.css',
})
export class FaqSection {
  activeIndex: number | null = null;

  leftFaqs = [
    {
      question: 'What are telecom value-added services?',
      answer:
        'Telecom value-added services (VAS) are non-core services provided by telecom operators to enhance their primary offerings. They include services such as SMS, MMS, mobile internet, entertainment subscriptions, and mobile banking.',
    },
    {
      question: 'How do telecom VAS benefit customers?',
      answer: 'Value-added services give customers access to additional features like music streaming, news alerts, games, location-based services, and mobile money. These services enhance the user experience and provide more ways to use mobile devices.',
    },
    {
      question: 'What types of VAS are available for telecom customers?',
      answer: 'Some popular types of VAS include caller tunes, missed call alerts, mobile TV, location-based services, mobile gaming, mobile payments, and SMS-based services for weather, news, and other information.',
    },
    {
      question: 'How can I activate or deactivate a value-added service?',
      answer:
        'To activate or deactivate a VAS, you can usually send a specific SMS code, call a customer service number, or use the telecom operator s mobile app or website. Instructions vary by provider and service.',
    },
  ];

  rightFaqs = [
    {
      question: 'Are telecom value-added services free?',
      answer:
        'Some VAS are free, while others require a subscription fee or usage charges. Always check with your telecom provider to understand the cost associated with each service.',
    },
    {
      question: 'Can I be charged for a value-added service without my knowledge?',
      answer:
        'Telecom operators typically notify users before activating a paid VAS. However, its important to review your monthly bill and report any charges for services you didn’t subscribe to.',
    },
    {
      question: 'How do telecom operators ensure the privacy of users for VAS?',
      answer: 'Telecom operators are required to comply with data privacy regulations, ensuring that customer information is used only for authorized purposes. They implement security measures to protect user data, especially for location-based and mobile payment services.',
    },
    {
      question: 'How reliable are your telecom value-added services?',
      answer:
        'Our telecom value-added services are built on enterprise-grade infrastructure designed for high availability, scalability, and consistent performance. Through continuous monitoring, redundancy, and automated delivery systems, we ensure reliable service even during high-volume usage..',
    },
  ];

  toggle(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
