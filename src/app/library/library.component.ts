import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OverlayService } from '../overlay/overlay.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  public plusIcon = faPlus;

  constructor(private overlay: OverlayService) {}

  public openDialog() {
    this.overlay.openDialog();
  }
}
