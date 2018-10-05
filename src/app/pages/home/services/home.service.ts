import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { appConfig } from '../../../app.config';
import { IPlaylist } from '../model';

@Injectable()
export class HomeService {
  constructor(private http: HttpClient) {}

  public getPlaylists(): Observable<IPlaylist[]> {
    return this.http.get<IPlaylist[]>(`${appConfig.baseUrl}playlist`);
  }
}
