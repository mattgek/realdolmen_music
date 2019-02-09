import { Component } from '@angular/core';
import { faEllipsisV, faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
  playSongIcon = faPlay;
  moreDetails = faEllipsisV;
  // show: boolean;

  // constructor(private el: ElementRef) {}

  // ngOnInit() {
  //   this.show = true;
  //   fromEvent(this.el.nativeElement, 'mouseleave').subscribe(() => {
  //     this.show = false;
  //   });
  // }
}
