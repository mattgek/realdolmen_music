import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IChartService } from '../interface';
import { IChart } from '../model';
import { IChartDto } from './model';

@Injectable()
export class ChartService implements IChartService {
  constructor(private jsonP: Jsonp) {}

  public getChart(): Observable<IChart[]> {
    return this.jsonP
      .get(`https://api.deezer.com/chart?output=jsonp&callback=JSONP_CALLBACK&q=`)
      .pipe(
        map(response => {
          const chart: IChartDto = response.json();
          const result: IChart[] = [];
          chart.albums.data.forEach(album => {
            result.push({
              type: 'album',
              id: album.id,
              img: album.cover_medium,
              name: album.title
            });
          });
          chart.artists.data.forEach(artist => {
            result.push({
              type: 'artist',
              id: artist.id,
              img: artist.picture_medium,
              name: artist.name
            });
          });
          chart.playlists.data.forEach(playlist => {
            result.push({
              type: 'playlist',
              id: playlist.id,
              img: playlist.picture_medium,
              name: playlist.title
            });
          });
          chart.tracks.data.forEach(track => {
            result.push({
              type: 'song',
              id: track.id,
              img: track.album.cover_medium,
              name: track.title,
              preview: track.preview
            });
          });
          return result;
        })
      );
  }
}
