import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverlayComponent, OverLayModule } from 'src/app/overlay';
import { SquareCardComponent } from './square-card.component';

@NgModule({
  declarations: [SquareCardComponent],
  imports: [CommonModule, OverLayModule],
  exports: [SquareCardComponent],
  entryComponents: [OverlayComponent]
})
export class SquareCardModule {}
