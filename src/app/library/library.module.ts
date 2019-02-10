import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DialogModule } from '../dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { RoundCardModule } from '../single-value/round-card';
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
    RoundCardModule,
    DialogModule,
    FontAwesomeModule
  ],
  entryComponents: [DialogComponent]
})
export class LibraryModule {}
