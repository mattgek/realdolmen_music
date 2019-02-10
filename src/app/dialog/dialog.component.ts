import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogReference } from './dialog-ref';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public addPlaylistFrm: FormGroup;
  constructor(private dialogReference: DialogReference, private fromBuilder: FormBuilder) {}

  public ngOnInit(): void {
    this.addPlaylistFrm = this.fromBuilder.group({
      playListTitle: '',
      description: '',
      privacy: ''
    });
  }

  public onSubmit() {
    // tslint:disable-next-line:no-console
    console.log(this.addPlaylistFrm.value);
  }

  public closeDialog() {
    this.dialogReference.close();
  }
}
