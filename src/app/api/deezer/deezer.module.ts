import { NgModule } from '@angular/core';
import { JsonpModule } from '@angular/http';
import { CHART_SERVICE, PLAYLIST_SERVICE } from '../injection-tokens';
import { ChartService } from './chart.service';
import { PlaylistService } from './playlist.service';

@NgModule({
  providers: [
    { provide: PLAYLIST_SERVICE, useClass: PlaylistService },
    { provide: CHART_SERVICE, useClass: ChartService }
  ],
  imports: [JsonpModule]
})
export class ApiModule {}
