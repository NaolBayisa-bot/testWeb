import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TimelinePoint {
  x: number;
  y: number;
  year: string;
  title: string;
  desc: string;
}

@Component({
  standalone: true,
  selector: 'app-about-us-core-section',
  imports: [CommonModule, FormsModule],
  templateUrl: './about-us-core-section.html',
  styleUrl: './about-us-core-section.css',
})
export class AboutUsCoreSection implements OnInit, OnDestroy {
  points: TimelinePoint[] = [
    {
      x: 100,
      y:250,
      year: '2023',
      title: 'Launched OneVAS, SMS Ethiopia, and API Message',
      desc: 'ALET Technology launched OneVAS, SMS Ethiopia, and API Message, providing enterprise-grade IT and telecom solutions. These platforms offer  SMS services, bulk messaging, scalable SaaS solutions, and programmable API messaging, enabling businesses to communicate efficiently, securely, and integrate messaging capabilities directly into their systems.',
    },
    {
      x: 350,
      y: 150,
      year: '2023',
      title: 'Introduced TeleBus',
      desc: 'Later the same year, TeleBus was introduced as a comprehensive communication platform for enterprises. By combining SMS and automation tools into a single solution, TeleBus empowers businesses to streamline operations and enhance customer engagement.',
    },
    {
      x: 580,
      y: 250,
      year: '2024',
      title: 'Expanded into Websites and SaaS Software',
      desc: 'Building on its telecom and messaging solutions, ALET Technology began offering custom website development and SaaS software. This expansion allows businesses to leverage cloud-based platforms and digital workflows, strengthening operational efficiency and scalability.',
    },
    {
      x: 800,
      y: 150,
      year: '2025',
      title: 'Delivering Full-Service Solutions',
      desc: 'By 2025, ALET Technology provides end-to-end services, combining telecom solutions, SaaS platforms, and digital automation tools. Our mission is to deliver secure, scalable, and comprehensive solutions that empower businesses to thrive in a modern digital ecosystem.',
    },
  ];

  /** Wave config */
  amplitude = 60;
  frequency = 1;
  speed = 0.000000001;

  /** Animation state */
  private phase = 0;
  private rafId!: number;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.rafId);
  }

  private animate() {
    this.phase += this.speed;
    this.cd.detectChanges(); // force Angular to re-render
    this.rafId = requestAnimationFrame(() => this.animate());
  }

  /** Wave Y position */
  getWaveY(p: TimelinePoint, index: number): number {
    // Group 1: 1st and 3rd (index 0 and 2)
    if (index === 0 || index === 2) {
      return p.y + Math.sin(this.phase) * this.amplitude;
    }
    // Group 2: 2nd and 4th (index 1 and 3)
    return p.y + Math.sin(this.phase + Math.PI) * this.amplitude; // opposite phase
  }

  /** Animated line */
  get polylinePoints(): string {
    return this.points.map((p, i) => `${p.x},${this.getWaveY(p, i)}`).join(' ');
  }

  /** Text below circle */
  getTextY(p: TimelinePoint, index: number): number {
    return this.getWaveY(p, index) + 32;
  }
}
