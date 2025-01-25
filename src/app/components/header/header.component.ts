import { Component } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagram,
  faFacebook,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
// import {faGithub} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-header',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faPhone = faPhone;
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTelegram = faTelegram;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('uk');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
