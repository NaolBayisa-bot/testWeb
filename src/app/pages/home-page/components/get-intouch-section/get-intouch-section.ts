import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';

// ── Rate‑limit config (all client‑side; defense‑in‑depth) ──
const RATE_LIMIT = {
  /** Minimum seconds since page load before allowing a submission */
  MIN_LOAD_SECONDS: 4,
  /** Cooldown seconds between consecutive submissions */
  COOLDOWN_SECONDS: 30,
  /** Max submissions allowed within the sliding window */
  MAX_SUBMISSIONS: 3,
  /** Sliding‑window duration in seconds */
  WINDOW_SECONDS: 3600, // 1 hour
};

const STORAGE_KEY = 'alet_contact_rate_limit';

interface RateLimitRecord {
  timestamps: number[];
  windowStart: string;
}

@Component({
  standalone: true,
  selector: 'app-get-intouch-section',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './get-intouch-section.html',
  styleUrl: './get-intouch-section.css',
})
export class GetIntouchSection {
  isSending = false;
  submitted = false;
  rateLimited = false;
  rateLimitMessage = '';
  contactForm: FormGroup;

  /** When the component was created (used for MIN_LOAD_SECONDS check) */
  private readonly pageLoadTime = Date.now();

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      phone: ['', [Validators.required, Validators.pattern(/^[+0-9\s\-()]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(2000)]],
      // ── Honeypot — hidden from real users, bots tend to fill it ──
      website: [''],
    });
  }

  get name()    { return this.contactForm.get('name'); }
  get phone()   { return this.contactForm.get('phone'); }
  get email()   { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }
  get website() { return this.contactForm.get('website'); }

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
      environment.emailjsPublicKey
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
