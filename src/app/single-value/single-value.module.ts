import { NgModule } from '@angular/core';
import { AlbumCardModule } from './album-card';
import { ArtistModule } from './artist';
import { SongModule } from './song';

@NgModule({
  declarations: [],
  imports: [AlbumCardModule, ArtistModule, SongModule],
  exports: []
})
export class SingleValueModule {}
