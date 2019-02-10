import { Component, Inject, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { flatMap, map, switchMap } from 'rxjs/operators';
import { IArtistDto } from 'src/app/api/deezer/model/artist.dto';
import { ARTIST_SERVICE, CHART_SERVICE, IArtistService, IChart, IChartService } from '../../../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public chart$: Observable<IChart[]>;
  artists: Subject<IChart[]>;
  artists$: Observable<IArtistDto[]>;

  constructor(
    @Inject(CHART_SERVICE) private chartService: IChartService,
    @Inject(ARTIST_SERVICE) private artistService: IArtistService
  ) {}

  ngOnInit() {
    this.artists = new Subject<IChart[]>();
    // todo: remove subscribe and use groupBy of rxjs (but doesn't work, its seems)
    this.chart$ = this.chartService.getChart().pipe(
      map(chart => {
        this.artists.next(chart.filter(c => c.type === 'artist'));
        return chart;
      })
    );

    const artistResult = [];
    this.artists$ = this.artists.pipe(
      flatMap(x => x),
      switchMap(a => {
        return [this.artistService.getArtist(a.id)];
      }),
      flatMap(x => x),
      map(t => {
        artistResult.push(t);
        return artistResult;
      })
    );
  }
}
