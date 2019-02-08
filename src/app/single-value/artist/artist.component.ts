import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  @Input()
  artistUrl: string;

  @Input()
  artistName: string;

  @Input()
  followers: number;
}
