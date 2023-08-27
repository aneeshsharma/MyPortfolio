import { Component } from '@angular/core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
    faLinkedin = faLinkedin;
    faGithub = faGithub;
    definingText: string[] = [
        'Software Developer',
        'Fullstack Engineer',
        'Game Developer',
        'CG Artist',
    ];

    socials: Map<string, string> = new Map([
      ['linkedin', 'https://www.linkedin.com/in/anishsharma15/'],
      ['github', 'https://github.com/aneeshsharma']
    ]);

    goToSocial(social: string) {
      let href = this.socials.get(social);
      if (href) {
        window.open(href, '_blank');
      }
    }
}
