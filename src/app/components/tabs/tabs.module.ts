import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs.component';

@NgModule({
  declarations: [TabsComponent],
  imports: [CommonModule],
  exports: [TabsComponent]
})
export class TabsModule {}
