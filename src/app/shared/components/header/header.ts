import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Nav } from '../nav/nav/nav';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule,FormsModule,Nav],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
@Input() logoSrc: string = '';
  @Input() logoAlt: string = 'Logo';

  @Input() logoText: string = 'OneVAS';






}





