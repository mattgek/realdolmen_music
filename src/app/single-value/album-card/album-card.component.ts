import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  ddef = 'askfjds';
  // decorators
  @Input()
  albumCoverUrl: string;
  @Input()
  albumTitle: string;
  @Input()
  albumType: string;
  @Input()
  additionalInfo: string;
}
