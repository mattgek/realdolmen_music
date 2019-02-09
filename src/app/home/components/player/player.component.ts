import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faPause,
  faPlay,
  faPlus,
  faRandom,
  faSlidersH,
  faStepBackward,
  faStepForward,
  faVolumeMute,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { IChart } from 'src/app/api';
import { MusicService } from './service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  previousIcon = faStepBackward;
  playIcon = faPlay;
  nextIcon = faStepForward;
  pauseIcon = faPause;
  addToPlaylistIcon = faPlus;
  loveIcon = faHeart;
  shuffleIcon = faRandom;
  volumeOnIcon = faVolumeUp;
  muteIcon = faVolumeMute;
  audioSettingsIcon = faSlidersH;

  isPlaying: boolean;
  noNext: boolean = true;
  noPrevious: boolean;
  isMuted: boolean;

  minSongTime: string;
  maxSongTime: string;
  currentSongTime: number = 0;
  maxTime: number;
  minTime: number = 0;
  currentPlayingIndex: number;

  audioEnded$: Observable<Event>;
  audioTimeUpdate$: Observable<Event>;
  audioPlaying$: BehaviorSubject<IChart>;
  selectedTrackList$: Observable<IChart[]>;

  @ViewChild('active') activePosition: ElementRef;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.audioPlaying$ = new BehaviorSubject<IChart>(undefined);
    this.musicService.audio.onended = this.handleAudioEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.musicService.audio.onplay = this.handleOnPlaying.bind(this);

    this.selectedTrackList$ = this.musicService.getCurrentTrackList().pipe(
      distinctUntilChanged(),
      tap(tracks => {
        if (tracks) {
          this.musicService.play(tracks[0]);
          this.currentPlayingIndex = 0;
          this.audioPlaying$.next(tracks[0]);

          if (tracks.length > 1) {
            this.noNext = false;
          }
        }
        return tracks;
      }),
      map(tracks => tracks)
    );
  }

  handleOnPlaying(e: this): any {
    this.isPlaying = true;
  }
  handleAudioEnded(e: this): any {
    this.isPlaying = false;
  }

  handleTimeUpdate(e: this): any {
    const elapsed = this.musicService.audio.currentTime;
    this.maxTime = this.musicService.audio.duration;
    this.currentSongTime = elapsed / this.maxTime;
    this.minSongTime = this.musicService.formatTime(elapsed);
    this.maxSongTime = this.musicService.formatTime(this.maxTime);
  }

  play() {
    if (this.musicService.audio.paused) {
      this.isPlaying = true;
      this.musicService.audio.play();
    }
  }

  pause() {
    if (!this.musicService.audio.paused) {
      this.isPlaying = false;
      this.musicService.audio.pause();
    }
  }

  next() {
    this.selectedTrackList$.subscribe(tracks => {
      if (tracks.indexOf(tracks[this.currentPlayingIndex + 1]) > -1) {
        this.currentPlayingIndex++;
        this.musicService.play(tracks[this.currentPlayingIndex]);
        this.musicService.audio.currentTime = 0;
        this.noPrevious = false;
      } else {
        this.noNext = true;
      }
    });
  }

  previous() {
    this.selectedTrackList$.subscribe(tracks => {
      if (tracks.indexOf(tracks[this.currentPlayingIndex - 1]) > -1) {
        this.currentPlayingIndex--;
        this.musicService.play(tracks[this.currentPlayingIndex]);
        this.musicService.audio.currentTime = 0;
        this.noNext = false;
      }
    });
  }
}
