import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArtistComponent } from './artist.component';

@NgModule({
  declarations: [ArtistComponent],
  imports: [CommonModule],
  exports: [ArtistComponent]
})
export class ArtistModule {}
