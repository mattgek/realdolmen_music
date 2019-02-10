import { Observable } from 'rxjs';
import { ITrackDto } from '../deezer/model/track.dto';

export interface IArtistService {
  getArtistTracks(url: string): Observable<ITrackDto[]>;
}
