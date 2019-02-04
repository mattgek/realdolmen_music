import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent {
  public plusIcon = faPlus;

  constructor(private dialog: DialogService) {}

  public openDialog() {
    this.dialog.openDialog();
  }
}
