import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverLayModule } from 'src/app/overlay';
import { ReadableNumberModule } from '../../readable-number';
import { ArtistComponent } from './artist.component';

@NgModule({
  declarations: [ArtistComponent],
  imports: [CommonModule, ReadableNumberModule, OverLayModule],
  exports: [ArtistComponent]
})
export class ArtistModule {}
