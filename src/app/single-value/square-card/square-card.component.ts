import { Component } from '@angular/core';
import { faEllipsisV, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.scss']
})
export class SquareCardComponent {
  playSongIcon = faPlay;
  moreDetails = faEllipsisV;

  test: boolean;

  toggleOverlay(state: any) {
    this.test = state;
  }
}
