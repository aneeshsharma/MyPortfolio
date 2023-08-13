import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blinker',
  templateUrl: './blinker.component.html',
  styleUrls: ['./blinker.component.scss']
})
export class BlinkerComponent {
  @Input() delay: number = 700;
}
