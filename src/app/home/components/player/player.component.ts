import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faPause,
  faPlay,
  faPlus,
  faRandom,
  faSlidersH,
  faStepBackward,
  faVolumeMute,
  faVolumeUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  previousIcon = faStepBackward;
  playIcon = faPlay;
  nextIcon = faStepBackward;
  pauseIcon = faPause;
  addToPlaylistIcon = faPlus;
  loveIcon = faHeart;
  shuffleIcon = faRandom;
  volumeOnIcon = faVolumeUp;
  muteIcon = faVolumeMute;
  audioSettingsIcon = faSlidersH;

  isPlaying: boolean;

  minSongTime: number = 0;
  maxsongTime: number = 0;
  currentSongTime: number = 0;

  constructor() {}

  ngOnInit() {}
}
