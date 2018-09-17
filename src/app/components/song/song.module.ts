import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SongComponent } from './song.component';

@NgModule({
  declarations: [SongComponent],
  imports: [CommonModule],
  exports: [SongComponent]
})
export class SongModule {}
