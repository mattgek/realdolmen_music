import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPlaylistService } from '../interface';
import { IPlaylist } from '../model';
import { IPlaylistDto } from './model/playlist.dto';

@Injectable()
export class PlaylistService implements IPlaylistService {
  constructor(private jsonP: Jsonp) {}

  public getPlaylist(id: string): Observable<IPlaylist[]> {
    return this.jsonP
      .get(`https://api.deezer.com/playlist/${id}?output=jsonp&callback=JSONP_CALLBACK&q=`)
      .pipe(
        map((response) => {
          const playlist: IPlaylistDto = response.json();
          return playlist.tracks.data.map((track) => {
            return {
              id: track.id,
              img: track.album.cover_medium,
              name: track.title
            };
          });
        })
      );
  }
}
