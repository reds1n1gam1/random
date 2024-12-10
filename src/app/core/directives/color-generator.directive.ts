import { ChangeDetectorRef, Directive, ElementRef, inject, OnInit, } from '@angular/core';
import { RandomColorService } from '../services/random-color.service';

@Directive({
  selector: '[appColorGenerator]',
  standalone: true,
})
export class ColorGeneratorDirective implements OnInit {
  private el = inject(ElementRef)
  private cdr = inject(ChangeDetectorRef)
  private randomColorServices = inject(RandomColorService);

  public ngOnInit(): void {
    this.el.nativeElement.innerHTML = this.randomColorServices.getRandomColor();
    this.cdr.detectChanges();
  }

}
