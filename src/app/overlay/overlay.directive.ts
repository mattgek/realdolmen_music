import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective implements OnInit {
  @Output() toggleHover = new EventEmitter();

  constructor(private el: ElementRef) {} // @Inject(COMPONENT_TYPE) private host: SquareCardComponent) {}

  // @HostListener('mouseenter')
  // onMouseEnter() {
  //   this.toggleHover.emit(true);
  // }

  // @HostListener('mouseleave')
  // onMouseLeave() {
  //   this.toggleHover.emit(false);
  // }

  ngOnInit() {
    fromEvent(this.el.nativeElement, 'mouseenter').subscribe(() => {
      this.toggleHover.emit(true);
    });

    fromEvent(this.el.nativeElement, 'mouseleave').subscribe(() => {
      this.toggleHover.emit(false);
    });
  }
}
