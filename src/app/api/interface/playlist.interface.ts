import { Observable } from 'rxjs';
import { IPlaylist } from '../model';

export interface IPlaylistService {
  getPlaylists(): Observable<IPlaylist[]>;
}
