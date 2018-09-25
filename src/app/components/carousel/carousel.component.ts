import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
type PaneType = 'previousItem' | 'nextItem';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    trigger('slide', [
      state('nextItem', style({ transform: 'translateX(-50%)' })),
      state('previousItem', style({ transform: 'translateX(0)' })),
      transition('* <=> *', [animate(500)])
    ])
  ]
})
export class CarouselComponent {
  public carretLeft = faAngleLeft;
  public carretRight = faAngleRight;
  public showPreviousBtn: boolean;
  public slideAction: PaneType;

  public nextItem() {
    this.showPreviousBtn = true;
    this.slideAction = 'nextItem';
  }

  public previousItem() {
    this.slideAction = 'previousItem';
  }
}
