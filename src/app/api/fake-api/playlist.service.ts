import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfig } from 'src/app/app.config';
import { IPlaylistService } from '../interface';
import { IPlaylist } from '../model';

@Injectable()
export class PlaylistService implements IPlaylistService {
  constructor(private http: HttpClient) {}

  getPlaylistTracks(url: string): Observable<any> {
    throw new Error('Method not implemented.');
  }
  public getPlaylist(id: string): Observable<IPlaylist> {
    return this.http.get<IPlaylist>(`${appConfig.baseUrl}playlist`);
  }
}
