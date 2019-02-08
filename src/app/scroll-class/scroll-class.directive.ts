import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollClass]'
})
export class ScrollClassDirective {
  @Input()
  appScrollClass: number;

  @HostBinding('class.scrolled')
  hasMeetScrollingTreshold: boolean;

  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const positioningOnScreen = this.el.nativeElement.parentNode.getBoundingClientRect();
    this.hasMeetScrollingTreshold = positioningOnScreen.top <= this.appScrollClass;
  }
}
