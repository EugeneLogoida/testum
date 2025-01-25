import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faInstagram, faTelegram } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-footer',
    imports: [
        FontAwesomeModule
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  faInstagram = faInstagram;
  faFacebook = faFacebook;
  faTelegram = faTelegram;
}
