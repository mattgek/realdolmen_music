import { OverlayModule as cdkOverlay } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayComponent } from './overlay.component';
import { OverlayDirective } from './overlay.directive';
import { OverlayService } from './overlay.service';

@NgModule({
  declarations: [OverlayComponent, OverlayDirective],
  imports: [CommonModule, cdkOverlay],
  exports: [OverlayComponent, OverlayDirective],
  providers: [OverlayService]
})
export class OverLayModule {}
