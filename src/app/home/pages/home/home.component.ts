import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CHART_SERVICE, IChart, IChartService } from '../../../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public chart$: Observable<IChart[]>;

  constructor(@Inject(CHART_SERVICE) private chartService: IChartService) {}

  ngOnInit() {
    // todo: remove subscribe and use groupBy of rxjs (but doesn't work, its seems)
    this.chart$ = this.chartService.getChart();
  }
}
