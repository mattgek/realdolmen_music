import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import {
  ALBUM_SERVICE,
  ARTIST_SERVICE,
  IAlbumService,
  IArtistService,
  IChart,
  IPlaylistService,
  ITrackService,
  PLAYLIST_SERVICE,
  TRACK_SERVICE
} from 'src/app/api';
import { ITrackDto } from 'src/app/api/deezer/model/track.dto';

@Injectable({
  providedIn: 'root'
})
export class MusicService implements OnDestroy {
  audio: HTMLAudioElement;
  currentTracks: Subject<ITrackDto[]>;

  private playlistTrackSub: Subscription;
  private albumTracksSub: Subscription;
  private trackSub: Subscription;
  private artistTracksSub: Subscription;

  constructor(
    @Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService,
    @Inject(ALBUM_SERVICE) private albumService: IAlbumService,
    @Inject(TRACK_SERVICE) private trackService: ITrackService,
    @Inject(ARTIST_SERVICE) private artistService: IArtistService
  ) {
    this.audio = new Audio();
    this.currentTracks = new BehaviorSubject<ITrackDto[]>(undefined);
  }

  ngOnDestroy() {
    this.playlistTrackSub.unsubscribe();
    this.albumTracksSub.unsubscribe();
    this.trackSub.unsubscribe();
    this.artistTracksSub.unsubscribe();
  }

  load(url: string) {
    this.audio.src = url;
    this.audio.load();
  }

  selectedTracklist(track: IChart) {
    switch (track.type) {
      case 'song':
        this.trackSub = this.trackService
          .getTrack(track.id)
          .subscribe(trk => this.currentTracks.next([trk]));
        break;
      case 'album':
        this.albumTracksSub = this.albumService
          .getAlbumTracks(track.tracklist)
          .subscribe(tracks => this.currentTracks.next(tracks));
        break;
      case 'artist':
        this.artistTracksSub = this.artistService
          .getArtistTracks(track.tracklist)
          .subscribe(tracks => this.currentTracks.next(tracks));
        break;
      case 'playlist':
        this.playlistTrackSub = this.playlistService
          .getPlaylistTracks(track.tracklist)
          .subscribe(tracks => this.currentTracks.next(tracks));
        break;
    }
  }

  play(track: ITrackDto) {
    this.load(track.preview);
    this.audio.play();
  }

  getCurrentTrackList(): Observable<ITrackDto[]> {
    return this.currentTracks;
  }

  randomTrack(tracks) {
    const trackLength = tracks.length;
    // Pick a random number
    const randomNumber = Math.floor(Math.random() * trackLength + 1);
    // Return a random track
    return tracks[randomNumber];
  }

  formatTime(seconds): string {
    let minutes: any = Math.floor(seconds / 60);
    minutes = minutes >= 10 ? minutes : '0' + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = seconds >= 10 ? seconds : '0' + seconds;
    return minutes + ':' + seconds;
  }
}
