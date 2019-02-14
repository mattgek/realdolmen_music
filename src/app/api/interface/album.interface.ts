import { Observable } from 'rxjs';
import { ITrack } from '../model';

export interface IAlbumService {
  getAlbumTracks(url: string): Observable<ITrack[]>;
}
