import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [PlayerComponent],
  imports: [CommonModule],
  exports: [PlayerComponent]
})
export class PlayerModule {}
