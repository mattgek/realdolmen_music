import { Directive, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { OverlayService } from './overlay.service';

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective implements OnInit {
  constructor(private el: ElementRef, private overlayService: OverlayService) {}

  public ngOnInit() {
    fromEvent(this.el.nativeElement, 'mouseenter').subscribe(() => {
      this.overlayService.showOverlay(this.el);
    });

    /**
     * this is not a good solution if you pass el as from where the event should trigger you get a flickering state
     * meaning the component is dynamically generated but when hovering on that component
     * the mouse leave event on el is triggered
     *
     * fromEvent(this.el.nativeElement, 'mouseleave').subscribe(() => {
     * this.overlayService.closeOverlay();
     *  });
     *
     */
  }
}
