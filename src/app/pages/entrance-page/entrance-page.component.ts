import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DirectivesModule } from 'src/app/core/directives/directive.module';

@Component({
  selector: 'app-entrance-page',
  templateUrl: './entrance-page.component.html',
  styleUrls: ['./entrance-page.component.scss'],
  standalone: true,
  imports: [
    DirectivesModule,
  ]
})
export class EntrancePageComponent {
  public copyToClipboard(color: string = ''): void {
    navigator.clipboard.writeText(color);
  }
}
