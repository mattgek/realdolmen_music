import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SquareCardComponent } from './square-card.component';

@NgModule({
  declarations: [SquareCardComponent],
  imports: [CommonModule],
  exports: [SquareCardComponent]
})
export class SquareCardModule {}
