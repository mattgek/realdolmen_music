import { Inject, Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subject, Subscription } from 'rxjs';
import { IChart, IPlaylistService, PLAYLIST_SERVICE } from 'src/app/api';
import { ITrackDto } from 'src/app/api/deezer/model/track.dto';

@Injectable({
  providedIn: 'root'
})
export class MusicService implements OnDestroy {
  audio: HTMLAudioElement;
  currentTracks: Subject<ITrackDto[]>;
  private playlistTrackSub: Subscription;
  // trackList: ITrackDto[] = [];

  constructor(@Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService) {
    this.audio = new Audio();
    this.currentTracks = new BehaviorSubject<ITrackDto[]>(undefined);
  }

  ngOnDestroy() {
    this.playlistTrackSub.unsubscribe();
  }

  load(url: string) {
    if (url) {
      console.log('url', url);

      this.audio.src = url;
      this.audio.load();
    }
  }

  selectedTracklist(track: IChart) {
    switch (track.type) {
      case 'track':
        // this.trackList.push(track);
        // this.currentTracks.next(this.trackList);
        break;
      case 'album':
        debugger;
        // this.trackList = this.currentTracks.next(this.trackList);
        break;
      case 'artist':
        // this.trackList.push(track);
        // this.currentTracks.next(this.trackList);
        break;
      case 'playlist':
        this.playlistTrackSub = this.playlistService
          .getPlaylistTracks(track.tracklist)
          .subscribe(tracks => this.currentTracks.next(tracks));
        break;
    }
  }

  play(track: ITrackDto) {
    if (track && track.preview) {
      this.load(track.preview);
      this.audio.play();
    }
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
