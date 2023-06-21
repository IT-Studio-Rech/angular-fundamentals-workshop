import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  OnChanges,
} from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlightMyText]',
})
export class HighlightMyTextDirective implements OnChanges {
  @Input('appHighlightMyText') color: 'blue' | 'red' | 'pink' | undefined; // Parameter kann wie directive heißen, oder unterschiedlich

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    this.changeBackgroundColor();
  }

  private changeBackgroundColor(): void {
    let colorValue = '';
    switch (this.color) {
      case 'blue':
        colorValue = '#0000FF';
        break;
      case 'red':
        colorValue = '#FF0000';
        break;
      case 'pink':
        colorValue = '#FFC0CB';
        break;
      default:
        colorValue = 'transparent';
        break;
    }
    this.renderer.setStyle(
      this.el.nativeElement,
      'backgroundColor',
      colorValue
    );
  }
}
