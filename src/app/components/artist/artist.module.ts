import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReadableNumberModule } from '../../pipes';
import { ArtistComponent } from './artist.component';

@NgModule({
  declarations: [ArtistComponent],
  imports: [CommonModule, ReadableNumberModule],
  exports: [ArtistComponent]
})
export class ArtistModule {}
