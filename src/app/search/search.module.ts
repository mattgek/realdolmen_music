import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule],
  exports: [SearchComponent]
})
export class SearchModule {}
