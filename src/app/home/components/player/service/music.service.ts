import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IChart } from 'src/app/api';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  audio: HTMLAudioElement;
  currentTracks: BehaviorSubject<IChart[]>;
  trackList: IChart[] = [];

  constructor() {
    this.audio = new Audio();
    this.currentTracks = new BehaviorSubject<IChart[]>(undefined);
  }

  load(url: string) {
    this.audio.src = url;
    this.audio.load();
  }

  selectTrack(track: IChart) {
    this.trackList.push(track);
    this.currentTracks.next(this.trackList);
  }

  play(track: IChart) {
    this.load(track.preview);
    this.audio.play();
  }

  getCurrentTrackList(): Observable<IChart[]> {
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
