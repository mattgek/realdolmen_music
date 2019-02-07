import { Observable } from 'rxjs';
import { IPlaylist } from '../model';

export interface IPlaylistService {
  getPlaylist(id: string): Observable<IPlaylist[]>;
}
