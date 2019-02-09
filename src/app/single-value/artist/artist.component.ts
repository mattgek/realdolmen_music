import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  show: boolean;

  @Input()
  artistUrl: string;

  @Input()
  artistName: string;

  @Input()
  followers: number;

  toggleOverlay(state: boolean) {
    this.show = state;
  }
}
