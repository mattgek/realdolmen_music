import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from '../../components';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CarouselModule],
  exports: [HomeComponent]
})
export class HomeModule {}
