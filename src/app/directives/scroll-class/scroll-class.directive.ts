import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollClass]'
})
export class ScrollClassDirective {
  @Input()
  public appScrollClass: number;

  @HostBinding('class.scrolled')
  public hasMeetScrollingTreshold: boolean;

  @HostListener('window:scroll', ['$event'])
  public onWindowScroll($event) {
    const positioningOnScreen = this.el.nativeElement.parentNode.getBoundingClientRect();
    this.hasMeetScrollingTreshold = positioningOnScreen.top <= this.appScrollClass;
  }

  constructor(private el: ElementRef) {}
}
