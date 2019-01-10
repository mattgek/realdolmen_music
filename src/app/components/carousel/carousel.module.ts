import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlbumCardModule } from '../album-card';
import { CarouselComponent } from './carousel.component';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, AlbumCardModule, FontAwesomeModule, ScrollDispatchModule],
  exports: [CarouselComponent]
})
export class CarouselModule {}
