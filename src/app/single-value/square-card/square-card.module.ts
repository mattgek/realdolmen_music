import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverLayModule } from 'src/app/overlay';
import { SquareCardComponent } from './square-card.component';

@NgModule({
  declarations: [SquareCardComponent],
  imports: [CommonModule, FontAwesomeModule, OverLayModule],
  exports: [SquareCardComponent]
})
export class SquareCardModule {}
