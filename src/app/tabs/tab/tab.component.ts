import { Component, Input, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input()
  public label: string;

  /** Template inside the MatTab view that contains an `<ng-content>`. */
  @ViewChild(TemplateRef)
  public content: TemplateRef<any>;
}
