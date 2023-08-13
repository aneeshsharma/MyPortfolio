import { Component } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
    definingText: string[] = [
        'Software Developer',
        'Fullstack Engineer',
        'Game Developer',
        'CG Artist',
    ];
}
