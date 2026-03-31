import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  email: string = 'your@email.com';
  phone: string = '+92 300 1234567';
  whatsapp: string = '+923001234567';
  address: string = 'Multan, Punjab, Pakistan';

  socials = {
    facebook: 'https://facebook.com/',
    linkedin: 'https://linkedin.com/'
  };

  openWhatsApp(): void {
    const message = encodeURIComponent('Hello, I want a professional CV.');
    window.open(`https://wa.me/${this.whatsapp}?text=${message}`, '_blank');
  }

}