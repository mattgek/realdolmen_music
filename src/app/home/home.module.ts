import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiModule } from '../api';
import { CarouselModule } from '../carousel';
import { AlbumCardModule } from '../single-value/album-card';
import { ArtistModule } from '../single-value/artist';
import { LayoutComponent, MenuComponent } from './components';
import { PlayerComponent } from './components/player/player.component';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './pages';

@NgModule({
  declarations: [HomeComponent, LayoutComponent, MenuComponent, PlayerComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AlbumCardModule,
    ArtistModule,
    CarouselModule,
    ApiModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [LayoutComponent]
})
export class HomeModule {}
