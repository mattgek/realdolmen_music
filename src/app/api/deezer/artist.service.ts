import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IArtistService } from '../interface';
import { ITrackDto } from './model/track.dto';
import { ITracksDto } from './model/tracks.dto';

@Injectable()
export class ArtistService implements IArtistService {
  constructor(private jsonP: Jsonp) {}

  getArtistTracks(url: string): Observable<ITrackDto[]> {
    return this.jsonP.get(`${url}?output=jsonp&callback=JSONP_CALLBACK&q=`).pipe(
      map(response => {
        const artist: ITracksDto = response.json();
        return artist.data.map(track => {
          return track;
        });
      })
    );
  }
}
