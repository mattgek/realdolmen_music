import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { ElementRef, Injectable, Injector } from '@angular/core';
import { OverlayReference } from './overlay-ref';
import { OverlayComponent } from './overlay.component';

@Injectable()
export class OverlayService {
  public overlayRef: OverlayReference;
  constructor(private overlay: Overlay, private injector: Injector) {}

  public showOverlay(el: ElementRef) {
    console.log(el.nativeElement);
    // positioning dialog in center of screen not related to any other components (global strategy)
    const posStrategy = this.overlay
      .position()
      .flexibleConnectedTo(el)
      .withPositions([
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'top'
        }
      ])
      .setOrigin(el);
    // overlay configuration
    const c = new OverlayConfig({
      positionStrategy: posStrategy,
      minHeight: '190px'
    });

    // create overlay
    const overlayRef = this.overlay.create(c);
    const dialogRef = new OverlayReference(overlayRef);

    // attach overlay
    this.attachOverlay(overlayRef, dialogRef);

    // return dialog reference to
    this.overlayRef = dialogRef;
  }

  public closeOverlay() {
    this.overlayRef.close();
  }

  private attachOverlay(overlayRef: OverlayRef, dialogRef: OverlayReference) {
    // create injector
    const injector = this.createInjector(dialogRef);

    // create component portal with overlay and overlay reference as dependency
    // TODO: config for overlay
    const componentPortal = new ComponentPortal(OverlayComponent, null, injector);

    // attach overlay
    const componentRef = overlayRef.attach(componentPortal);
    return componentRef.instance;
  }

  private createInjector(dialogRef: OverlayReference) {
    // use weakmap for garbase collection purposes
    const injectionTokens = new WeakMap();

    // set token
    injectionTokens.set(OverlayComponent, dialogRef);

    return new PortalInjector(this.injector, injectionTokens);
  }
}
