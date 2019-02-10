import { Observable } from 'rxjs';
import { IArtistDto } from '../deezer/model/artist.dto';
import { ITrackDto } from '../deezer/model/track.dto';

export interface IArtistService {
  getArtist(url: number): Observable<IArtistDto>;
  getArtistTracks(url: string): Observable<ITrackDto[]>;
}
