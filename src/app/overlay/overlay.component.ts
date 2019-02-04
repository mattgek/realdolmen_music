import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { OverlayReference } from './overlay-ref';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  public addPlaylistFrm: FormGroup;
  constructor(private overlayReference: OverlayReference, private fromBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.addPlaylistFrm = this.fromBuilder.group({
      playListTitle: '',
      description: '',
      privacy: ''
    });
  }

  public onSubmit() {
    console.log(this.addPlaylistFrm.value);
  }

  public closeDialog() {
    this.overlayReference.close();
  }
}
