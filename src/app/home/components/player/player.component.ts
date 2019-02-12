import { Component, OnInit } from '@angular/core';
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
import { BehaviorSubject, combineLatest, fromEvent, merge, Observable, Subject } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  mapTo,
  scan,
  shareReplay,
  startWith,
  tap
} from 'rxjs/operators';
import { ITrackDto } from 'src/app/api/deezer/model/track.dto';
import { MusicService } from './service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
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
  isPlaying$: Observable<boolean>;
  noNext: boolean = true;
  noPrevious: boolean = true;
  isMuted: boolean;

  minSongTime: string;
  maxSongTime: string;
  currentSongTime: number = 0;
  maxTime: number;
  maxTime$: Observable<number>;
  minTime: number = 0;
  currentPlayingIndex$: Subject<{ [key: string]: string | number }>;

  queueList$: Observable<ITrackDto[]>;
  audioPlaying$: Observable<ITrackDto>;

  play$ = new Subject();
  pause$ = new Subject();

  constructor(private musicService: MusicService) {}

  ngOnInit() {
    this.currentPlayingIndex$ = new BehaviorSubject<{ [key: string]: string | number }>({
      state: 'initial',
      i: 0
    });

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

    const update$ = fromEvent(this.musicService.audio, 'timeupdate');

    this.maxTime$ = update$.pipe(
      map(_ => this.musicService.audio.duration),
      filter(x => !Number.isNaN(x))
    );
    const audioEnded$ = fromEvent(this.musicService.audio, 'ended').pipe(mapTo(false));
    const audioPlay$ = fromEvent(this.musicService.audio, 'play').pipe(mapTo(true));
    const onPause$ = this.pause$.pipe(mapTo(false));
    const onPlay$ = this.play$.pipe(mapTo(true));
    this.isPlaying$ = merge(audioEnded$, audioPlay$, onPause$, onPlay$).pipe(startWith(false));
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  handleOnPlaying() {
    this.isPlaying = true;
  }
  handleAudioEnded() {
    this.isPlaying = false;
    this.next();
  }

  handleTimeUpdate() {
    // TODO: cleanup
    const elapsed = this.musicService.audio.currentTime;
    this.maxTime = this.musicService.audio.duration;
    this.currentSongTime = elapsed / this.maxTime;
    this.minSongTime = this.musicService.formatTime(elapsed);
    this.maxSongTime = this.musicService.formatTime(this.maxTime);
  }

  play() {
    if (this.musicService.audio.paused && this.musicService.audio.src) {
      this.isPlaying = true;
      this.play$.next();
      this.musicService.audio.play();
    }
  }

  pause() {
    if (!this.musicService.audio.paused) {
      this.isPlaying = false;
      this.pause$.next();
      this.musicService.audio.pause();
    }
  }

  next() {
    this.currentPlayingIndex$.next({ state: 'next', i: 1 });
  }

  previous() {
    this.currentPlayingIndex$.next({ state: 'previous', i: -1 });
  }

  private musicProcessPlayer() {
    const currenIndexScanner$ = this.currentPlayingIndex$.pipe(
      scan(
        (acc, current) => {
          if (current.state === 'initial') {
            return {
              state: current.state,
              i: acc.i + current.i
            };
          } else if (current.state === 'next') {
            return {
              state: current.state,
              i: acc.i + current.i
            };
          }
          return {
            state: current.state,
            i: acc.i + current.i
          };
        },
        { state: 'initial', i: 0 }
      )
    );

    this.audioPlaying$ = combineLatest(this.queueList$, currenIndexScanner$).pipe(
      map(([tracks, currentState]) => {
        let playingTrack: ITrackDto;

        if (tracks.indexOf(tracks[currentState.i]) > -1) {
          if (tracks[currentState.i].preview) {
            this.musicService.play(tracks[currentState.i]);
            playingTrack = tracks[currentState.i];
          } else {
            this.noMp3AudioHandler(currentState.state);
          }
          this.previousNextBtnHandler(currentState.state, false);
          return playingTrack;
        } else {
          this.previousNextBtnHandler(currentState.state, true, true);
          return playingTrack;
        }
      })
    );
  }

  private noMp3AudioHandler(state: string) {
    if (state === 'next') {
      this.next();
    } else if (state === 'previous') {
      this.previous();
    }
  }

  // TODO: make this better
  private previousNextBtnHandler(
    actionState: string,
    buttonState: boolean,
    noTrack: boolean = false
  ) {
    if (actionState === 'next') {
      noTrack ? (this.noNext = true) : (this.noPrevious = buttonState);
    } else if (actionState === 'previous') {
      noTrack ? (this.noPrevious = true) : (this.noNext = buttonState);
    }
  }

  private registerAudioEvents() {
    const update$ = fromEvent(this.musicService.audio, 'timeupdate');

    this.maxTime$ = update$.pipe(
      map(_ => this.musicService.audio.duration),
      filter(x => !Number.isNaN(x))
    );
    const audioEnded$ = fromEvent(this.musicService.audio, 'ended').pipe(mapTo(false));
    const audioPlay$ = fromEvent(this.musicService.audio, 'play').pipe(mapTo(true));
    const onPause$ = this.pause$.pipe(mapTo(false));
    const onPlay$ = this.play$.pipe(mapTo(true));
    this.isPlaying$ = merge(audioEnded$, audioPlay$, onPause$, onPlay$).pipe(startWith(false));
  }
}
