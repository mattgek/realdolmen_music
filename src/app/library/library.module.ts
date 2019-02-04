import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OverLayModule } from '../overlay';
import { OverlayComponent } from '../overlay/overlay.component';
import { AlbumCardModule } from '../single-value/album-card';
import { TabsModule } from '../tabs';
import {
  AlbumsComponent,
  ArtistsComponent,
  LikedSongsComponent,
  PlaylistsComponent
} from './components';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library.routing';

@NgModule({
  declarations: [
    LibraryComponent,
    AlbumsComponent,
    ArtistsComponent,
    LikedSongsComponent,
    PlaylistsComponent
  ],
  imports: [
    CommonModule,
    LibraryRoutingModule,
    TabsModule,
    AlbumCardModule,
    OverLayModule,
    FontAwesomeModule
  ],
  entryComponents: [OverlayComponent]
})
export class LibraryModule {}
