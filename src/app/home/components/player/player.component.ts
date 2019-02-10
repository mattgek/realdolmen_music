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
import { distinctUntilChanged, take } from 'rxjs/operators';
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
  noPrevious: boolean = true;
  isMuted: boolean;

  minSongTime: string;
  maxSongTime: string;
  currentSongTime: number = 0;
  maxTime: number;
  minTime: number = 0;
  currentPlayingIndex: number;

  audioPlaying$: Subject<ITrackDto>;
  selectedTrackList$: Observable<ITrackDto[]>;
  queueList$: Observable<ITrackDto[]>;
  private nextSub: Subscription;
  private previousSub: Subscription;
  private selectedTrackListSub: Subscription;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.audioPlaying$ = new Subject<ITrackDto>();
    this.musicService.audio.onended = this.handleAudioEnded.bind(this);
    this.musicService.audio.ontimeupdate = this.handleTimeUpdate.bind(this);
    this.musicService.audio.onplay = this.handleOnPlaying.bind(this);

    this.queueList$ = this.musicService.getCurrentTrackList().pipe(distinctUntilChanged());
    this.selectedTrackList$ = this.queueList$;

    this.selectedTrackListSub = this.selectedTrackList$.subscribe(tracks => {
      this.currentPlayingIndex = 0;
      if (tracks) {
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
    this.selectedTrackListSub.unsubscribe();
  }

  handleOnPlaying(e: this): any {
    this.isPlaying = true;
  }
  handleAudioEnded(e: this): any {
    this.isPlaying = false;
    this.next();
  }

  handleTimeUpdate(e: this): any {
    const elapsed = this.musicService.audio.currentTime;
    this.maxTime = this.musicService.audio.duration;
    this.currentSongTime = elapsed / this.maxTime;
    this.minSongTime = this.musicService.formatTime(elapsed);
    this.maxSongTime = this.musicService.formatTime(this.maxTime);
  }

  play() {
    if (this.musicService.audio.paused && this.musicService.audio.src) {
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
    this.nextSub = this.selectedTrackList$.pipe(take(1)).subscribe(tracks => {
      if (tracks.indexOf(tracks[this.currentPlayingIndex + 1]) > -1) {
        this.currentPlayingIndex++;

        if (tracks[this.currentPlayingIndex].preview) {
          this.musicService.play(tracks[this.currentPlayingIndex]);
          this.audioPlaying$.next(tracks[this.currentPlayingIndex]);
        } else {
          this.next();
        }
        this.noPrevious = false;
      } else {
        this.noNext = true;
      }
    });
  }

  previous() {
    this.previousSub = this.selectedTrackList$.pipe(take(1)).subscribe(tracks => {
      if (tracks.indexOf(tracks[this.currentPlayingIndex - 1]) > -1) {
        this.currentPlayingIndex--;

        if (tracks[this.currentPlayingIndex].preview) {
          this.musicService.play(tracks[this.currentPlayingIndex]);
          this.audioPlaying$.next(tracks[this.currentPlayingIndex]);
        } else {
          this.previous();
        }
        this.noNext = false;
      } else {
        this.noPrevious = true;
      }
    });
  }
}
