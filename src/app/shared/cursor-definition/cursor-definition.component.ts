import {
    AfterViewInit,
    Component,
    ContentChildren,
    Input,
    QueryList,
} from '@angular/core';
import { Observable, timer } from 'rxjs';
import { DefItemDirective } from '../def-item.directive';

@Component({
    selector: 'app-cursor-definition',
    templateUrl: './cursor-definition.component.html',
    styleUrls: ['./cursor-definition.component.scss'],
})
export class CursorDefinitionComponent implements AfterViewInit {
    @ContentChildren(DefItemDirective)
    items!: QueryList<DefItemDirective>;

    elements: string[] = [];

    renderText: Observable<string> = new Observable();

    @Input() stop: number = 3000;
    @Input() delay: number = 100;

    bounce(list: string[], stop: number, delay: number) {
        return new Observable<string>((subscriber) => {
            function buildText(
                list: string[],
                index: number,
                textIndex: number
            ) {
                if (index >= list.length) {
                    buildText(list, 0, textIndex);
                } else {
                    if (textIndex > list[index].length) {
                        timer(stop).subscribe(() =>
                            eraseText(list, index, textIndex - 2)
                        );
                    } else {
                        subscriber.next(list[index].substring(0, textIndex));
                        timer(delay).subscribe(() =>
                            buildText(list, index, textIndex + 1)
                        );
                    }
                }
            }

            function eraseText(
                list: string[],
                index: number,
                textIndex: number
            ) {
                if (textIndex < 0) {
                    timer(delay).subscribe(() => buildText(list, index + 1, 1));
                } else {
                    subscriber.next(list[index].substring(0, textIndex));
                    timer(delay).subscribe(() =>
                        eraseText(list, index, textIndex - 1)
                    );
                }
            }

            if (list.length > 0) {
                buildText(list, 0, 1);
            }
        });
    }

    ngAfterViewInit(): void {
        this.elements = this.items.map((item) => item.text);

        this.renderText = this.bounce(this.elements, 1000, 100);
    }
}
