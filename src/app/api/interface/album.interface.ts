import { Observable } from 'rxjs';
import { ITrackDto } from '../deezer/model/track.dto';

export interface IAlbumService {
  getAlbumTracks(url: string): Observable<ITrackDto[]>;
}
