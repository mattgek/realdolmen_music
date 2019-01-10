import { NgModule } from '@angular/core';
import { PLAYLIST_SERVICE } from '../injection-tokens';
import { PlaylistService } from './playlist.service';

@NgModule({
  providers: [{ provide: PLAYLIST_SERVICE, useClass: PlaylistService }]
})
export class ApiModule {}
