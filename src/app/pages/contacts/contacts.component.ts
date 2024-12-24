import { Component } from '@angular/core';
import { faPhone, faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTelegram  } from '@fortawesome/free-brands-svg-icons';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  faPhone = faPhone;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTelegram = faTelegram;
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
}
