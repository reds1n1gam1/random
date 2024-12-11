import { NgModule } from '@angular/core';
import { ColorGeneratorDirective } from './color-generator.directive';

@NgModule({
    declarations: [
        ColorGeneratorDirective
    ],
    exports: [
        ColorGeneratorDirective,
    ]
})
export class DirectivesModule { }
