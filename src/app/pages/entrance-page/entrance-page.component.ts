import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-entrance-page',
  templateUrl: './entrance-page.component.html',
  styleUrls: ['./entrance-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntrancePageComponent { }
