import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlaylist, IPlaylistService, PLAYLIST_SERVICE } from '../api';

@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.scss']
})
export class HotlistComponent implements OnInit {
  public tracks$: Observable<IPlaylist[]>;

  constructor(@Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService) {}

  public ngOnInit(): void {
    this.tracks$ = this.playlistService.getPlaylist('1266968331');
  }
}
