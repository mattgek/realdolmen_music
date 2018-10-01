import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  @Input()
  public artistUrl: string;

  @Input()
  public artistName: string;

  @Input()
  public followers: number;
}
