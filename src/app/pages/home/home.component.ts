import { Component, OnInit } from '@angular/core';
import { HomeService } from './services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public playlists: any;

  constructor(private homeService: HomeService) {}

  public ngOnInit() {
    // todo: remove subscribe and use groupBy of rxjs (but doesn't work, its seems)
    this.playlists = [];
    this.homeService.getPlaylists().subscribe((x) => {
      const groupedValue = this.groupBy(x, 'group');
      this.playlists = Object.keys(groupedValue).map((y) => {
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
