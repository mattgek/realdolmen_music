import { Component, Input } from '@angular/core';
import { IArtistDto } from 'src/app/api/deezer/model/artist.dto';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  show: boolean;

  @Input() artist: IArtistDto;

  toggleOverlay(state: boolean) {
    this.show = state;
  }
}
