import { ChangeDetectorRef, Directive, ElementRef, inject, OnInit, } from '@angular/core';
import { RandomColorService } from '../services/random-color.service';

@Directive({
  selector: '[appColorGenerator]',
  exportAs: 'colorGenerator'
})
export class ColorGeneratorDirective implements OnInit {
  private el = inject(ElementRef)
  private cdr = inject(ChangeDetectorRef)
  private randomColorServices = inject(RandomColorService);

  public randomColor?: string;

  public ngOnInit(): void {
    this.randomColor = '#' + this.randomColorServices.getRandomColor();
  }

  public generateColor(): void { 
    this.randomColor = '#' + this.randomColorServices.getRandomColor();
  }

}
