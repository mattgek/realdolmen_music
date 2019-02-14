import { IArtist } from './artist.interface';

export interface IAlbum {
  id: number;
  title: string;
  cover: string;
  cover_medium: string;
  record_type: string;
  tracklist: string;
  position: number;
  artist: IArtist;
  type: string;
}
