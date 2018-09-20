import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  // decorators
  @Input()
  public albumCoverUrl: string;
  @Input()
  public albumTitle: string;
  @Input()
  public albumType: string;
  @Input()
  public additionalInfo: string;
}
