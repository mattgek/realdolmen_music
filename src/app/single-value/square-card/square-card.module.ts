import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverLayModule } from 'src/app/overlay';
import { SquareCardComponent } from './square-card.component';

@NgModule({
  declarations: [SquareCardComponent],
  imports: [CommonModule, OverLayModule],
  exports: [SquareCardComponent]
})
export class SquareCardModule {}
