import { Component, OnDestroy, OnInit } from '@angular/core';
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
import { Observable, Subject, Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { ITrackDto } from 'src/app/api/deezer/model/track.dto';
import { MusicService } from './service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnDestroy {
  //#region Icons
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
  //#endregion

  isPlaying: boolean;
  noNext: boolean = true;
  noPrevious: boolean;
  isMuted: boolean;

  minSongTime: string;
  maxSongTime: string;
  currentSongTime: number = 0;
  maxTime: number;
  minTime: number = 0;
  currentPlayingIndex: number = 0;

  audioPlaying$: Subject<ITrackDto>;
  queueList$: Observable<ITrackDto[]>;
  selectedTrackList$: Observable<ITrackDto[]>;
  private nextSub: Subscription;
  private previousSub: Subscription;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.audioPlaying$ = new Subject<ITrackDto>();
    this.musicService.audio.onended = this.handleAudioEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.musicService.audio.onplay = this.handleOnPlaying.bind(this);

    this.selectedTrackList$ = this.musicService.getCurrentTrackList().pipe(distinctUntilChanged());
    this.queueList$ = this.selectedTrackList$;

    this.queueList$.subscribe(tracks => {
      if (tracks && this.currentPlayingIndex === 0) {
        this.musicService.play(tracks[0]);
        this.audioPlaying$.next(tracks[0]);

        if (tracks.length > 1) {
          this.noNext = false;
        }
      }
    });
  }

  ngOnDestroy() {
    this.nextSub.unsubscribe();
    this.previousSub.unsubscribe();
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
    this.nextSub = this.queueList$.subscribe(tracks => {
      if (tracks.indexOf(tracks[this.currentPlayingIndex + 1]) > -1) {
        this.currentPlayingIndex++;
        this.musicService.play(tracks[this.currentPlayingIndex]);
        this.audioPlaying$.next(tracks[this.currentPlayingIndex]);
        this.noPrevious = false;
      } else {
        this.noNext = true;
      }
    });
  }

  previous() {
    this.previousSub = this.queueList$.subscribe(tracks => {
      if (tracks.indexOf(tracks[this.currentPlayingIndex - 1]) > -1) {
        this.currentPlayingIndex--;
        this.musicService.play(tracks[this.currentPlayingIndex]);
        this.audioPlaying$.next(tracks[this.currentPlayingIndex]);
        this.noNext = false;
      }
    });
  }
}
