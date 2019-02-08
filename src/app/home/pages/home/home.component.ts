import { Component, Inject, OnInit } from '@angular/core';
import { IPlaylistService, PLAYLIST_SERVICE } from '../../../api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists: any;

  constructor(@Inject(PLAYLIST_SERVICE) private playlistService: IPlaylistService) {}

  ngOnInit() {
    // todo: remove subscribe and use groupBy of rxjs (but doesn't work, its seems)
    this.playlists = [];
    this.playlistService.getPlaylists().subscribe(x => {
      const groupedValue = this.groupBy(x, 'group');
      this.playlists = Object.keys(groupedValue).map(y => {
        return {
          group: y,
          items: groupedValue[y]
        };
      });
    });
  }

  private groupBy(xs, key) {
    return xs.reduce((rv, x) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }
}
