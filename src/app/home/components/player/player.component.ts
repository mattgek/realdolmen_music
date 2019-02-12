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
import { BehaviorSubject, combineLatest, fromEvent, Observable } from 'rxjs';
import { distinctUntilChanged, map, scan, shareReplay, tap } from 'rxjs/operators';
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
  currentPlayingIndex$: BehaviorSubject<number>;

  queueList$: Observable<ITrackDto[]>;
  audioPlaying$: Observable<ITrackDto>;

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.currentPlayingIndex$ = new BehaviorSubject<number>(0);

    this.registerAudioEvents();

    this.queueList$ = this.musicService.getCurrentTrackList().pipe(
      distinctUntilChanged(),
      tap(tracks => {
        if (tracks && tracks.length > 1) {
          if (tracks.length > 1) {
            this.noNext = false;
          }
        }
      }),
      shareReplay(1)
    );

    this.musicProcessPlayer();
  }

  handleOnPlaying() {
    this.isPlaying = true;
  }
  handleAudioEnded() {
    this.isPlaying = false;
    this.next();
  }

  handleTimeUpdate() {
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
    this.currentPlayingIndex$.next(1);
  }

  previous() {
    this.currentPlayingIndex$.next(-1);
  }

  private musicProcessPlayer() {
    const currenIndexScanner$ = this.currentPlayingIndex$.pipe(
      scan((acc, current) => {
        return acc + current;
      }, 0)
    );

    this.audioPlaying$ = combineLatest(this.queueList$, currenIndexScanner$).pipe(
      map(([tracks, index]) => {
        let playingTrack: ITrackDto;
        if (tracks.indexOf(tracks[index]) > -1) {
          if (tracks[index].preview) {
            this.musicService.play(tracks[index]);
            playingTrack = tracks[index];
          } else {
            // or previous or next
          }

          return playingTrack;
          // show previous button or next button
        } else {
          // hide previous or next button
          return playingTrack;
        }
      })
    );
  }

  private registerAudioEvents() {
    const audioEnded$ = fromEvent(this.musicService.audio, 'ended');
    const audioPlay$ = fromEvent(this.musicService.audio, 'play');
    const audioTimeUpdate$ = fromEvent(this.musicService.audio, 'timeupdate');

    // TODO: fix subscriptions herev potential memory leaks
    audioPlay$.subscribe(() => this.handleOnPlaying());
    audioTimeUpdate$.subscribe(() => this.handleTimeUpdate());
    audioEnded$.subscribe(() => this.handleAudioEnded());
  }
}
