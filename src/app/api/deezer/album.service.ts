import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbumService } from '../interface';
import { ITrackDto } from './model/track.dto';
import { ITracksDto } from './model/tracks.dto';

@Injectable()
export class AlbumService implements IAlbumService {
  constructor(private jsonP: Jsonp) {}

  getAlbumTracks(url: string): Observable<ITrackDto[]> {
    return this.jsonP.get(`${url}?output=jsonp&callback=JSONP_CALLBACK&q=`).pipe(
      map(response => {
        const album: ITracksDto = response.json();
        return album.data.map(track => {
          return track;
        });
      })
    );
  }
}
