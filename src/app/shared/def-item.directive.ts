import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appDefItem]',
})
export class DefItemDirective {
    constructor(private elementRef: ElementRef) {}

    get text(): string {
      return this.elementRef.nativeElement.innerText;
    }
}
