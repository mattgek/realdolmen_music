import { Component, Input } from '@angular/core';
import { IChart } from 'src/app/api';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent {
  // decorators
  @Input() item: IChart;
}
