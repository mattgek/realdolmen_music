import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from '../../components';
import { AlbumCardModule, ArtistModule } from '../../components';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { HomeService } from './services';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AlbumCardModule, ArtistModule],
  exports: [HomeComponent],
  providers: [HomeService]
})
export class HomeModule {}
