import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollClassModule } from '../scroll-class';
import { TabComponent } from './tab';
import { TabsComponent } from './tabs';

const components = [TabsComponent, TabComponent];

@NgModule({
  declarations: [components],
  imports: [CommonModule, ScrollClassModule],
  exports: [components]
})
export class TabsModule {}
