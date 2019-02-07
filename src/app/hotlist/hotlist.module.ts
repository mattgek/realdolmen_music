import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlbumCardModule } from '../single-value/album-card';
import { HotlistComponent } from './hotlist.component';
import { HotlistRoutingModule } from './hotlist.routing';

@NgModule({
  declarations: [HotlistComponent],
  imports: [CommonModule, HotlistRoutingModule, AlbumCardModule],
  exports: [HotlistComponent]
})
export class HotlistModule {}
