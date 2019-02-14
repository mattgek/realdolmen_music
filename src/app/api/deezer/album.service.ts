import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IAlbumService } from '../interface';
import { ITrack, ITracks } from '../model';

@Injectable()
export class AlbumService implements IAlbumService {
  constructor(private jsonP: Jsonp) {}

  getAlbumTracks(url: string): Observable<ITrack[]> {
    return this.jsonP.get(`${url}?output=jsonp&callback=JSONP_CALLBACK&q=`).pipe(
      map(response => {
        const album: ITracks = response.json();
        return album.data.map(track => {
          return track;
        });
      })
    );
  }
}
