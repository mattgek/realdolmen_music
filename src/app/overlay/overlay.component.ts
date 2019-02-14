import { Component, Input } from '@angular/core';
import { faEllipsisV, faPlay } from '@fortawesome/free-solid-svg-icons';
import { IChart } from '../api';
import { MusicService } from '../home/components';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  playSongIcon = faPlay;
  moreDetails = faEllipsisV;

  @Input() item: IChart;

  constructor(private musicService: MusicService) {}

  play() {
    if (this.item) {
      this.musicService.selectedTracklist(this.item);
    }
  }
}
