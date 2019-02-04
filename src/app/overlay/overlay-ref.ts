import { OverlayRef } from '@angular/cdk/overlay';

export class OverlayReference {
  constructor(private overlayRef: OverlayRef) {}

  public close(): void {
    this.overlayRef.dispose();
  }
}
