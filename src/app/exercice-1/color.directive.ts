import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  @HostBinding('style.color') color: string = 'red';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }

  @HostListener('window:keydown', ['$event']) windowClick($event) {
    this.handleKeyDown($event);
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        this.color = 'blue';
        break;
      case 'ArrowDown':
        this.color = 'green';
        break;
      case 'ArrowLeft':
        this.color = 'grey';
        break;
      case 'ArrowUp':
        this.color = 'pink';
        break;

      default:
        this.color = 'black';
        break;
    }
  }

}
