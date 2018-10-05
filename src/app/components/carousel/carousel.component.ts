import { Component, OnInit } from '@angular/core';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  public carretLeft = faAngleLeft;
  public carretRight = faAngleRight;
  public showPreviousBtn: boolean;
  public currentAlbum: number;

  public ngOnInit(): void {
    this.currentAlbum = 0;
  }
}
