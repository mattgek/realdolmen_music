import { Directive, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs';

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective implements OnInit {
  // componentRef: ComponentRef<OverlayComponent>;
  @Output() toggleOverlay = new EventEmitter();

  constructor(
    private el: ElementRef // private viewContainer: ViewContainerRef,
  ) // private resolver: ComponentFactoryResolver
  {} // @Inject(COMPONENT_TYPE) private host: SquareCardComponent) {}

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
      this.toggleOverlay.emit(true);
      // this.createComponent();
    });

    fromEvent(this.el.nativeElement, 'mouseleave').subscribe(() => {
      this.toggleOverlay.emit(false);
      // this.destroyComponent();
    });
  }

  // private createComponent() {
  //   this.viewContainer.clear();

  //   // create factory for component creation
  //   const factory: ComponentFactory<OverlayComponent> = this.resolver.resolveComponentFactory(
  //     OverlayComponent
  //   );

  //   this.componentRef = this.viewContainer.createComponent(factory);
  // }

  // private destroyComponent() {
  //   this.componentRef.instance.
  // }
}
