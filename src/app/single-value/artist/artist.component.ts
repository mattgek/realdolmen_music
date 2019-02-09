import { Component, Input } from '@angular/core';
import { IChart } from 'src/app/api';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  show: boolean;

  @Input() artist: IChart;

  toggleOverlay(state: boolean) {
    this.show = state;
  }
}
