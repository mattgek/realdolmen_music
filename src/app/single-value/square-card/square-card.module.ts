import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverLayModule } from 'src/app/overlay';
import { OverlayComponent } from 'src/app/overlay/overlay.component';
import { SquareCardComponent } from './square-card.component';

@NgModule({
  declarations: [SquareCardComponent],
  imports: [CommonModule, OverLayModule],
  exports: [SquareCardComponent],
  entryComponents: [OverlayComponent]
})
export class SquareCardModule {}
