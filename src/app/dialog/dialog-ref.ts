import { OverlayRef } from '@angular/cdk/overlay';

export class DialogReference {
  constructor(private overlayRef: OverlayRef) {}

  public close(): void {
    this.overlayRef.dispose();
  }
}
