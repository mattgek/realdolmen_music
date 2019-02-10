export interface IChart {
  id: number;
  name: string;
  img: string;
  type: string;
  artist?: string;
  tracklist?: string;
  totalTracks?: number;
  totalFollowers?: number;
}
