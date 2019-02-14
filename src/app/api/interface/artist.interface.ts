import { Observable } from 'rxjs';
import { IArtist, ITrack } from '../model';

export interface IArtistService {
  getArtist(url: number): Observable<IArtist>;
  getArtistTracks(url: string): Observable<ITrack[]>;
}
