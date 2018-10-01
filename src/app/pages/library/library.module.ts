import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TabsModule } from '../../components';
import { LibraryComponent } from './library.component';
import { LibraryRoutingModule } from './library.routing';

@NgModule({
  declarations: [LibraryComponent],
  imports: [CommonModule, LibraryRoutingModule, TabsModule],
  exports: [LibraryComponent]
})
export class LibraryModule {}
