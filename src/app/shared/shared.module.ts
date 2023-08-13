import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlinkerComponent } from './blinker/blinker.component';
import { CursorDefinitionComponent } from './cursor-definition/cursor-definition.component';
import { DefItemDirective } from './def-item.directive';

@NgModule({
    declarations: [BlinkerComponent, CursorDefinitionComponent, DefItemDirective],
    imports: [CommonModule],
    exports: [BlinkerComponent, CursorDefinitionComponent, DefItemDirective],
})
export class SharedModule {}
