import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  ALBUM_SERVICE,
  ARTIST_SERVICE,
  IAlbumService,
  IArtistService,
  IChart,
  IPlaylistService,
  ITrack,
  ITrackService,
  PLAYLIST_SERVICE,
  TRACK_SERVICE
} from 'src/app/api';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  audio: HTMLAudioElement;
  currentTracks: Subject<IChart>;

  constructor(
    @Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService,
    @Inject(ALBUM_SERVICE) private albumService: IAlbumService,
    @Inject(TRACK_SERVICE) private trackService: ITrackService,
    @Inject(ARTIST_SERVICE) private artistService: IArtistService
  ) {
    this.audio = new Audio();
    this.currentTracks = new Subject<IChart>();
  }

  load(url: string) {
    this.audio.src = url;
    this.audio.load();
  }

  play(track: ITrack) {
    this.load(track.preview);
    this.audio.play();
  }

  selectedTracklist(track: IChart) {
    // TODO: this should not be. stream is
    this.currentTracks.next(track);
  }

  getCurrentTrackList(): Observable<ITrack[]> {
    return this.currentTracks.pipe(
      switchMap(trk => {
        switch (trk.type) {
          case 'song':
            return this.trackService.getTrack(trk.id).pipe(map(t => [t]));
          case 'album':
            return this.albumService.getAlbumTracks(trk.tracklist);
          case 'artist':
            return this.artistService.getArtistTracks(trk.tracklist);
          case 'playlist':
            return this.playlistService.getPlaylistTracks(trk.tracklist);
          default:
            return [];
        }
      })
    );
  }

  // TODO: random tracks
  randomTrack(tracks) {
    // const trackLength = tracks.length;
    // // Pick a random number
    // const randomNumber = Math.floor(Math.random() * trackLength + 1);
    // // Return a random track
  }

  formatTime(seconds): string {
    let minutes: any = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }
}
