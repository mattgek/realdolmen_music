import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from '../../components';
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
  imports: [CommonModule, LibraryRoutingModule, TabsModule]
})
export class LibraryModule {}
