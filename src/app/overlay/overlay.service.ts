import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { OverlayReference } from './overlay-ref';
import { OverlayComponent } from './overlay.component';

@Injectable()
export class OverlayService {
  constructor(private overlay: Overlay, private injector: Injector) {}

  public openDialog() {
    // positioning dialog in center of screen not related to any other components (global strategy)
    const posStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    // overlay configuration
    const c = new OverlayConfig({
      positionStrategy: posStrategy,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      hasBackdrop: true
    });

    // create overlay
    const overlayRef = this.overlay.create(c);
    const dialogRef = new OverlayReference(overlayRef);

    // attach overlay
    this.attachOverlay(overlayRef, dialogRef);

    // enable dialog close on backdrop click
    overlayRef.backdropClick().subscribe(() => dialogRef.close());

    // return dialog reference to
    return dialogRef;
  }

  private attachOverlay(overlayRef: OverlayRef, dialogRef: OverlayReference) {
    // create injector
    const injector = this.createInjector(dialogRef);

    // create component portal with overlay and overlay reference as dependency
    // TODO: config for overlay
    const componentPortal = new ComponentPortal(OverlayComponent, null, injector);

    // attach overlay
    overlayRef.attach(componentPortal);
  }

  private createInjector(dialogRef: OverlayReference) {
    // use weakmap for garbase collection purposes
    const injectionTokens = new WeakMap();

    // set token
    injectionTokens.set(OverlayReference, dialogRef);

    return new PortalInjector(this.injector, injectionTokens);
  }
}
