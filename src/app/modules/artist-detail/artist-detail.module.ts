import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArtistDetailComponent } from './artist-detail.component';
import { ArtistDetailRoutingModule } from './artist-detail.routing';

@NgModule({
  declarations: [ArtistDetailComponent],
  imports: [CommonModule, ArtistDetailRoutingModule],
  exports: [ArtistDetailComponent]
})
export class ArtistDetailModule {}
