import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayDirective } from './overlay.directive';

@NgModule({
  declarations: [OverlayDirective],
  imports: [CommonModule],
  exports: [OverlayDirective]
  // providers: [
  //   {
  //     provide: COMPONENT_TYPE,
  //     useClass: SquareCardComponent
  //   }
  // ]
})
export class OverLayModule {}
