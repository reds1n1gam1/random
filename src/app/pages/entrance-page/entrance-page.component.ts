import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ColorGeneratorDirective } from 'src/app/core/directives/color-generator.directive';

@Component({
  selector: 'app-entrance-page',
  templateUrl: './entrance-page.component.html',
  styleUrls: ['./entrance-page.component.css'],
  hostDirectives: [
    { directive: ColorGeneratorDirective },]
})
export class EntrancePageComponent { }
