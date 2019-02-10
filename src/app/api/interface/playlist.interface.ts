import { Observable } from 'rxjs';
import { ITrackDto } from '../deezer/model/track.dto';
import { IPlaylist } from '../model';

export interface IPlaylistService {
  getPlaylist(id: string): Observable<IPlaylist[]>;
  getPlaylistTracks(url: string): Observable<ITrackDto[]>;
}
