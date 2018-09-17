import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumCardModule } from '../../components';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AlbumCardModule],
  exports: [HomeComponent]
})
export class HomeModule {}
