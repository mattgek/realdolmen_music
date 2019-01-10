import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HotlistComponent } from './hotlist.component';
import { HotlistRoutingModule } from './hotlist.routing';

@NgModule({
  declarations: [HotlistComponent],
  imports: [CommonModule, HotlistRoutingModule],
  exports: [HotlistComponent]
})
export class HotlistModule {}
