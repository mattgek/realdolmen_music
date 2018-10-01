import { Component, ContentChild, Input } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {
  @Input()
  public label: string;

  @ContentChild('content', { read: true })
  public content: any;
}
