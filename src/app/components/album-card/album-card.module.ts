import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SquareCardModule } from '../../shared';
import { AlbumCardComponent } from './album-card.component';

@NgModule({
  declarations: [AlbumCardComponent],
  imports: [CommonModule, SquareCardModule],
  exports: [AlbumCardComponent]
})
export class AlbumCardModule {}
