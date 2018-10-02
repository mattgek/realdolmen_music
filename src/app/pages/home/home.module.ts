import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumCardModule, ArtistModule } from '../../components';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AlbumCardModule, ArtistModule],
  exports: [HomeComponent]
})
export class HomeModule {}
