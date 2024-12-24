import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faTelegram  } from '@fortawesome/free-brands-svg-icons';
import { RouterLink } from '@angular/router';
// import {faGithub} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FontAwesomeModule,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  faPhone = faPhone;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTelegram = faTelegram;


}
