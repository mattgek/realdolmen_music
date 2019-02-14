import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverlayComponent } from './overlay.component';
import { OverlayDirective } from './overlay.directive';

@NgModule({
  declarations: [OverlayDirective, OverlayComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [OverlayDirective, OverlayComponent]
  // providers: [
  //   {
  //     provide: COMPONENT_TYPE,
  //     useClass: SquareCardComponent
  //   }
  // ]
})
export class OverLayModule {}
