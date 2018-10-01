import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab';
import { TabsComponent } from './tabs';

const components = [TabsComponent, TabComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components]
})
export class TabsModule {}
