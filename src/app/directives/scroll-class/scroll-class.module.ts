import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScrollClassDirective } from './scroll-class.directive';

const components = [ScrollClassDirective];

@NgModule({
  declarations: [components],
  imports: [CommonModule],
  exports: [components]
})
export class ScrollClassModule {}
