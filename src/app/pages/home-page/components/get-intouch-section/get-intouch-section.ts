import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../environments/environment.example';

@Component({
  standalone: true,
  selector: 'app-get-intouch-section',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './get-intouch-section.html',
  styleUrl: './get-intouch-section.css',
})
export class GetIntouchSection {
  isSending = false;
  submitted = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.pattern(/^[+0-9\s\-()]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
    });
  }

  get name()    { return this.contactForm.get('name'); }
  get phone()   { return this.contactForm.get('phone'); }
  get email()   { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    this.submitted = true;

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      form.reportValidity();
      return;
    }

    this.isSending = true;

    emailjs.sendForm(
      environment.emailjsServiceId,
      environment.emailjsTemplateId,
      form,
      {
        publicKey: environment.emailjsPublicKey,
        blockHeadless: true,
        limitRate: {
          throttle: 30_000,
          id: 'contact-form-submission',
        },
        blockList: {
          list: [
            'spam',
            'viagra',
            'cialis',
            'lottery',
            'winner',
            'click here',
            'unsubscribe',
            'casino',
            'crypto',
            'bitcoin',
            'investment',
            'make money',
          ],
        },
      }
    ).then(
      () => {
        this.isSending = false;
        this.submitted = false;
        form.reset();
        this.contactForm.reset();
        this.showToast('Message sent! Thanks, I will respond right away 😊', 'success');
      },
      (error) => {
        this.isSending = false;
        this.submitted = false;

        const status = error?.status;
        let message = 'Failed to send message. Please try again.';

        if (status === 429) {
          message = 'Too many messages. Please wait a minute and try again.';
        } else if (status === 403) {
          message =
            'Message blocked due to suspicious content. Please remove spam-like text and try again.';
        } else if (status === 400) {
          message =
            'Invalid submission. Please check your details and try again.';
        }

        console.error('Email sending error:', error);
        this.showToast(message, 'error');
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
