import { Component, Input } from '@angular/core';
import { IChart } from 'src/app/api';

@Component({
  selector: 'app-square-card',
  templateUrl: './square-card.component.html',
  styleUrls: ['./square-card.component.scss']
})
export class SquareCardComponent {
  show: boolean;
  @Input() item: IChart;

  toggleOverlay(state: boolean) {
    this.show = state;
  }
}
