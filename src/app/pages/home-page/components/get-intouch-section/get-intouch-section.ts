import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-get-intouch-section',
  imports: [CommonModule,FormsModule],
  templateUrl: './get-intouch-section.html',
  styleUrl: './get-intouch-section.css',
})
export class GetIntouchSection {
 isSending = false;
  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    this.isSending = true;

    emailjs.sendForm(
      'service_ldgd843', // Your EmailJS Service ID
      'template_f3qq2gc', // Your EmailJS Template ID
      form,
      '4nco2yhrkQwXQ0vg0' // Your EmailJS Public Key
    ).then(
      () => {
        this.isSending = false;
        form.reset();
        this.showToast('Message sent! Thanks, I will respond right away 😊', 'success');
      },
      (error) => {
        this.isSending = false;
        console.error('Email sending error:', error);
        this.showToast('Failed to send message. Please try again.', 'error');
      }
    );
  }

  showToast(message: string, type: 'success' | 'error') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.textContent = message;
    toast.className = `px-4 py-2 rounded-lg shadow-lg text-white ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} opacity-0 transform translate-y-4 transition-all`;
    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.add('opacity-100', 'translate-y-0');
    });

    setTimeout(() => {
      toast.classList.remove('opacity-100', 'translate-y-0');
      setTimeout(() => container.removeChild(toast), 300);
    }, 4000);
  }
}


