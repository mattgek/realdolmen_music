import { Observable } from 'rxjs';
import { ITrackDto } from '../deezer/model/track.dto';

export interface ITrackService {
  getTrack(id: number): Observable<ITrackDto>;
}
