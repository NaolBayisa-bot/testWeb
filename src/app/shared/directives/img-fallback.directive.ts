import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: 'img[appImgFallback]',
  standalone: true,
})
export class ImgFallbackDirective {
  @Input() appImgFallback: string = '';
  @Input() fallbackClass: string = '';

  private readonly fallbackSvg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100">
      <rect width="100" height="100" fill="#1f2937" rx="8"/>
      <circle cx="50" cy="40" r="12" fill="#374151"/>
      <path d="M20 75 Q50 55 80 75" fill="none" stroke="#374151" stroke-width="4" stroke-linecap="round"/>
      <rect x="38" y="70" width="24" height="12" rx="4" fill="#374151"/>
      <path d="M35 25 L45 20 L55 28 L65 22" fill="none" stroke="#4b5563" stroke-width="2" stroke-linecap="round"/>
    </svg>`;

  constructor(
    private el: ElementRef<HTMLImageElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    // Add loading state class
    this.renderer.addClass(this.el.nativeElement, 'img-loading');
    if (this.fallbackClass) {
      this.renderer.addClass(this.el.nativeElement, this.fallbackClass);
    }
  }

  @HostListener('load')
  onLoad() {
    this.renderer.removeClass(this.el.nativeElement, 'img-loading');
    this.renderer.removeClass(this.el.nativeElement, 'img-error');
  }

  @HostListener('error')
  onError() {
    this.renderer.removeClass(this.el.nativeElement, 'img-loading');
    this.renderer.addClass(this.el.nativeElement, 'img-error');

    // Use provided fallback or generate inline SVG
    const fallback = this.appImgFallback || this.generateFallbackDataUri();
    if (fallback) {
      this.renderer.setAttribute(this.el.nativeElement, 'src', fallback);
    }
  }

  private generateFallbackDataUri(): string {
    return 'data:image/svg+xml,' + encodeURIComponent(this.fallbackSvg);
  }
}
