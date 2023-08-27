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
}
