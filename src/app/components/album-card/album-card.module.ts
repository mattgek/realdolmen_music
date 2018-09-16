import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumCardComponent } from './album-card.component';

@NgModule({
  declarations: [AlbumCardComponent],
  imports: [CommonModule],
  exports: [AlbumCardComponent]
})
export class AlbumCardModule {}
