import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivePlaylistComponent } from './active-playlist.component';
import { ActivePlaylistRoutingModule } from './active-playlist.routing';

@NgModule({
  declarations: [ActivePlaylistComponent],
  imports: [CommonModule, ActivePlaylistRoutingModule],
  exports: [ActivePlaylistComponent]
})
export class ActivePlaylistModule {}
