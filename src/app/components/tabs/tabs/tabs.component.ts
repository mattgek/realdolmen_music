import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from '../tab';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @ContentChildren(TabComponent)
  public tabs: QueryList<TabComponent>;

  public activeTab: TabComponent;

  public ngAfterContentChecked() {
    this.activeTab = this.tabs.toArray()[0];
  }

  public setActiveTab(activeTab: TabComponent) {
    debugger;
    this.activeTab = activeTab;
  }
}
